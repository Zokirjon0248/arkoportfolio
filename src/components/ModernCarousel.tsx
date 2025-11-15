import { useState, useEffect, useRef, useCallback, useMemo } from "react";

interface ModernCarouselProps {
  images: string[];
}

export default function ModernCarousel({ images = [] }: ModernCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImageLoading, setLightboxImageLoading] = useState(false);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoSlideRef = useRef<number | null>(null);
  const isTransitioningRef = useRef(false);

  // Demo images if none provided
  const demoImages = useMemo(() => [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80"
  ], []);

  const displayImages = images.length > 0 ? images : demoImages;

  // Preload all images once
  useEffect(() => {
    displayImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [displayImages]);

  // Responsive slides per view with debounce
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 768) setSlidesPerView(2);
      else if (window.innerWidth < 1024) setSlidesPerView(3);
      else setSlidesPerView(4);
    };
    
    updateSlidesPerView();
    
    let timeoutId: number;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateSlidesPerView, 150);
    };
    
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Auto slide with proper cleanup
  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    
    autoSlideRef.current = window.setInterval(() => {
      if (!isTransitioningRef.current && !lightboxOpen) {
        setCurrent(prev => (prev + 1) % displayImages.length);
      }
    }, 3000);
  }, [displayImages.length, lightboxOpen]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (displayImages.length === 0 || lightboxOpen) {
      stopAutoSlide();
      return;
    }
    
    startAutoSlide();
    return () => stopAutoSlide();
  }, [displayImages.length, lightboxOpen, startAutoSlide, stopAutoSlide]);

  // Navigation with transition lock
  const handleNext = useCallback(() => {
    if (isTransitioningRef.current || displayImages.length === 0) return;
    
    isTransitioningRef.current = true;
    stopAutoSlide();
    setCurrent(prev => (prev + 1) % displayImages.length);
    
    setTimeout(() => {
      isTransitioningRef.current = false;
      startAutoSlide();
    }, 600);
  }, [displayImages.length, stopAutoSlide, startAutoSlide]);

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current || displayImages.length === 0) return;
    
    isTransitioningRef.current = true;
    stopAutoSlide();
    setCurrent(prev => (prev - 1 + displayImages.length) % displayImages.length);
    
    setTimeout(() => {
      isTransitioningRef.current = false;
      startAutoSlide();
    }, 600);
  }, [displayImages.length, stopAutoSlide, startAutoSlide]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioningRef.current || displayImages.length === 0) return;
    
    isTransitioningRef.current = true;
    stopAutoSlide();
    setCurrent(index);
    
    setTimeout(() => {
      isTransitioningRef.current = false;
      startAutoSlide();
    }, 600);
  }, [displayImages.length, stopAutoSlide, startAutoSlide]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    stopAutoSlide();
  }, [stopAutoSlide]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 50) handleNext();
    else if (touchStart - touchEnd < -50) handlePrev();
    else startAutoSlide();
    
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, handleNext, handlePrev, startAutoSlide]);

  // Lightbox handlers
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setLightboxImageLoading(true);
    document.body.style.overflow = 'hidden';
    stopAutoSlide();
  }, [stopAutoSlide]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
    setLightboxImageLoading(false);
    startAutoSlide();
  }, [startAutoSlide]);

  const nextLightbox = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxImageLoading(true);
    setLightboxIndex(prev => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const prevLightbox = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxImageLoading(true);
    setLightboxIndex(prev => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextLightbox();
      else if (e.key === 'ArrowLeft') prevLightbox();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightbox, prevLightbox]);

  // Calculate pagination
  const totalPages = Math.ceil(displayImages.length / slidesPerView);
  const currentPage = Math.floor(current / slidesPerView) % totalPages;

  if (displayImages.length === 0) {
    return (
      <div className="relative w-full p-8 text-center text-white">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div 
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ 
            transform: `translateX(-${current * (100 / slidesPerView)}%)`,
          }}
        >
          {displayImages.map((src, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-2" 
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <div 
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-neutral-800 aspect-[4/3]"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={src}
                  alt={`Portfolio ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        disabled={isTransitioningRef.current}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        disabled={isTransitioningRef.current}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx * slidesPerView)}
            disabled={isTransitioningRef.current}
            className={`h-2.5 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              currentPage === idx 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8' 
                : 'bg-white/30 hover:bg-white/50 w-2.5'
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 animate-fadeIn" 
          onClick={closeLightbox}
        >
          {/* Close Button (X) - Rasmning o'ng yuqori burchagida */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-20 right-4 sm:top-20 sm:right-6 md:top-20 md:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300 z-50 shadow-2xl hover:scale-110 group"
            aria-label="Close lightbox"
            style={{ position: 'fixed' }}
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Previous Button */}
          <button 
            onClick={prevLightbox}
            className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-[99999] hover:scale-110 shadow-xl"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Next Button */}
          <button 
            onClick={nextLightbox}
            className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-[99999] hover:scale-110 shadow-xl"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={displayImages[lightboxIndex]} 
              alt={`Portfolio ${lightboxIndex + 1}`} 
              className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                lightboxImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setLightboxImageLoading(false)}
            />
          </div>
          
          {/* Image Counter */}
          <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-base z-[99999] font-medium shadow-xl">
            {lightboxIndex + 1} / {displayImages.length}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}