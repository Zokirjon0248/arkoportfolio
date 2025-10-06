import { useState, useEffect, useRef } from "react";
import Demo from "@/components/GalleryData";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";

// CountUp komponenti
interface CountUpProps {
  end: number;
  suffix?: string;
  decimals?: number;
}
function CountUp({ end, suffix = '', decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toFixed(decimals)}{suffix}</>;
}

// Modern Carousel komponenti
interface ModernCarouselProps {
  images: string[];
}
function ModernCarousel({ images }: ModernCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
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

  // Lightbox functions
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const totalPages = Math.ceil(images.length / slidesPerView);
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
          style={{ transform: `translateX(-${(current % slidesPerView) * (100 / slidesPerView)}%)` }}
        >
          {images.concat(images.slice(0, slidesPerView)).map((src, idx) => (
            <div key={idx} className="flex-shrink-0 px-2" style={{ width: `${100 / slidesPerView}%` }}>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => openLightbox(idx % images.length)}>
                <img
                  src={src}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
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

      {/* Pagination Dots */}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevLightbox(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextLightbox(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightboxIndex]} alt={`Portfolio ${lightboxIndex + 1}`} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

// Rasmlar
const imageLogos = [
  "https://i.ibb.co/7dj0XGCq/grup1-2.jpg",
  "https://i.ibb.co/BVy4yLhg/grup1-3.jpg",
  "https://i.ibb.co/wNBhFVKx/grup1-4.jpg",
  "https://i.ibb.co/vxr8pCV7/grup1-5.jpg",
  "https://i.ibb.co/FbCgcD31/grup2-2.jpg",
  "https://i.ibb.co/9HJ17yc7/grup2-3.jpg",
  "https://i.ibb.co/1tdPyTYy/grup2-4.jpg",
];

export default function Portfolio() {
  const stats = [
    { label: 'Loyihalar', value: 100, suffix: '+' },
    { label: 'Mijozlar', value: 100, suffix: '+' },
    { label: 'Tajriba', value: 5, suffix: '+ yil' },
    { label: 'Baholash', value: 4.9, suffix: '★', decimals: 1 }
  ];

  return (
    <section className="min-h-screen text-white px-4 md:px-8 py-10 md:py-16 flex flex-col items-center">
      <div className="relative max-w-7xl mx-auto px-4 text-center mb-10">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300">Yangi loyihalar uchun ochiq</span>
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto text-center mb-8 md:mb-12">
          Bu bo'limda men yaratgan loyihalar to'plamini ko'rishingiz mumkin.
          Har bir loyiha o'ziga xos dizayn va texnologiyadan foydalanilgan.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mb-16 px-4">
        <ModernCarousel images={imageLogos} />
      </div>

      <div className="w-full max-w-7xl">
        <Demo />
      </div>
      <WhyWorkWithMe />
    </section>
  );
}
