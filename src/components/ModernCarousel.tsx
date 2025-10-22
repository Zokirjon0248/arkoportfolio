import { useState, useEffect, useRef } from "react";

interface ModernCarouselProps {
  images: string[];
}

export default function ModernCarousel({ images = [] }: ModernCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Demo images if none provided
  const demoImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80"
  ];

  const displayImages = images.length > 0 ? images : demoImages;

  // Preload images
  useEffect(() => {
    displayImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(index));
      };
    });
  }, [displayImages]);

  // Preload adjacent images for lightbox
  useEffect(() => {
    if (lightboxOpen) {
      const preloadIndexes = [
        (lightboxIndex - 1 + displayImages.length) % displayImages.length,
        lightboxIndex,
        (lightboxIndex + 1) % displayImages.length
      ];
      
      preloadIndexes.forEach(idx => {
        const img = new Image();
        img.src = displayImages[idx];
      });
    }
  }, [lightboxOpen, lightboxIndex, displayImages]);

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 768) setSlidesPerView(2);
      else if (window.innerWidth < 1024) setSlidesPerView(3);
      else setSlidesPerView(4);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Auto slide
  useEffect(() => {
    if (displayImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % displayImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [displayImages.length]);

  const handleNext = () => {
    if (isTransitioning || displayImages.length === 0) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev + 1) % displayImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning || displayImages.length === 0) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev - 1 + displayImages.length) % displayImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || displayImages.length === 0) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  // Lightbox with image loading state
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setImageLoadingStates({ ...imageLoadingStates, [index]: true });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextLightbox = () => {
    const newIndex = (lightboxIndex + 1) % displayImages.length;
    setLightboxIndex(newIndex);
    if (!imageLoadingStates[newIndex]) {
      setImageLoadingStates({ ...imageLoadingStates, [newIndex]: true });
    }
  };

  const prevLightbox = () => {
    const newIndex = (lightboxIndex - 1 + displayImages.length) % displayImages.length;
    setLightboxIndex(newIndex);
    if (!imageLoadingStates[newIndex]) {
      setImageLoadingStates({ ...imageLoadingStates, [newIndex]: true });
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoadingStates({ ...imageLoadingStates, [index]: false });
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  if (displayImages.length === 0) {
    return (
      <div className="relative w-full p-8 text-center text-white">
        <p>No images to display</p>
      </div>
    );
  }

  const totalPages = Math.ceil(displayImages.length / slidesPerView);
  const currentPage = Math.floor(current / slidesPerView) % totalPages;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * (100 / slidesPerView)}%)` }}
        >
          {displayImages.concat(displayImages.slice(0, slidesPerView)).map((src, idx) => {
            const actualIndex = idx % displayImages.length;
            const isLoaded = loadedImages.has(actualIndex);
            
            return (
              <div key={idx} className="flex-shrink-0 px-2" style={{ width: `${100 / slidesPerView}%` }}>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer bg-neutral-800" onClick={() => openLightbox(actualIndex)}>
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={src}
                    alt={`Portfolio ${actualIndex + 1}`}
                    loading="lazy"
                    className={`w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-all duration-300 ${
                      isLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx * slidesPerView)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentPage === idx ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-20 right-4 w-12 h-12 rounded-full bg-red-600 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-[10000] text-2xl">
            ✕
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevLightbox(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-600 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-[10000] text-3xl">
            ‹
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextLightbox(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-600 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-[10000] text-3xl">
            ›
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {imageLoadingStates[lightboxIndex] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={displayImages[lightboxIndex]} 
              alt={`Portfolio ${lightboxIndex + 1}`} 
              className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                imageLoadingStates[lightboxIndex] ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => handleImageLoad(lightboxIndex)}
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm z-[10000]">
            {lightboxIndex + 1} / {displayImages.length}
          </div>
        </div>
      )}
    </div>
  );
}