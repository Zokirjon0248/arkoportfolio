"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModernCarousel from "@/components/ModernCarousel";
import { PortfolioGrid, PortfolioDetail } from "@/components/GalleryData";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  suffix?: string;
  decimals?: number;
}

function CountUp({ end, suffix = "", decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const increment = (end - start) / (duration / stepTime);

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(parseFloat(start.toFixed(decimals)));
        ref.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current!);
  }, [end, decimals]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Portfolio() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  
  // Portfolio view state
  const [currentView, setCurrentView] = useState<"grid" | "detail">("grid");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    // 🔹 Matn (tepadan chiqadi)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );

    // 🔹 Stat cardlar (pastdan chiqadi)
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const stats = [
    { value: 100, suffix: "+", label: "Tugallangan loyihalar" },
    { value: 5, suffix: "+", label: "Hamkor kompaniyalar" },
    { value: 5, suffix: "+", label: "Yillik tajriba" },
    { value: 100, suffix: "%", label: "Mijozlar mamnunligi" },
  ];

  const images = [
    "https://i.ibb.co/7dj0XGCq/grup1-2.jpg",
    "https://i.ibb.co/BVy4yLhg/grup1-3.jpg",
    "https://i.ibb.co/wNBhFVKx/grup1-4.jpg",
    "https://i.ibb.co/vxr8pCV7/grup1-5.jpg",
    "https://i.ibb.co/FbCgcD31/grup2-2.jpg",
    "https://i.ibb.co/9HJ17yc7/grup2-3.jpg",
    "https://i.ibb.co/1tdPyTYy/grup2-4.jpg",
    "https://i.ibb.co/XrLwCbZH/grup3-1.jpg",
    "https://i.ibb.co/QhqRhrP/grup3-2.jpg",
    "https://i.ibb.co/TDk0yKhn/grup4-1.jpg",
    "https://i.ibb.co/QvK97SWT/grup4-2.jpg",
    "https://i.ibb.co/d4NVw0xM/grup4-3.jpg",
    "https://i.ibb.co/HpRRMkFK/grup4-4.jpg",
    "https://i.ibb.co/jPJP3hVJ/grup5-1.jpg",
    "https://i.ibb.co/y7SdMNZ/grup5-2.jpg",
    "https://i.ibb.co/TML26ymt/grup5-3.jpg",
    "https://i.ibb.co/s9pRZhgx/grup5-4.jpg",
    "https://i.ibb.co/35PyMT7v/grup5-5.jpg",
    "https://i.ibb.co/j9fGsQy8/grup6-2.jpg",
    "https://i.ibb.co/JwW3pYJf/grup6-3.jpg",
    "https://i.ibb.co/zVyvG73d/grup6-4.jpg",
    "https://i.ibb.co/nsQxnxGK/grup6-1.jpg",
    "https://i.ibb.co/MDKM4tRT/photo-2025-10-02-19-17-15.jpg",
    "https://i.ibb.co/Xfrk77dK/photo-2025-10-02-19-17-19.jpg",
    "https://i.ibb.co/Cp1CV0Nv/photo-2025-10-02-19-17-22.jpg",
    "https://i.ibb.co/20F47J9C/photo-2025-10-02-19-17-24.jpg",
    "https://i.ibb.co/m5XJDBW5/photo-2025-10-02-19-17-26.jpg",
    "https://i.ibb.co/NnHhNYGR/photo-2025-10-02-19-17-28.jpg",
  ];

  // Handle project click
  const handleProjectClick = (slug: string) => {
    setSelectedSlug(slug);
    setCurrentView("detail");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to grid
  const handleBack = () => {
    setCurrentView("grid");
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen text-white px-4 md:px-8 py-10 md:py-16 flex flex-col items-center">
      {/* Yuqori matn - faqat grid view da ko'rsatiladi */}
      {currentView === "grid" && (
        <>
          <div ref={textRef} className="relative max-w-7xl mx-auto text-center mb-10">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-orange-200">
                  Yangi loyihalar uchun ochiq
                </span>
              </div>
            </div>

            {/* MY oq, Portfolio olovrang */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Bizning </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </h1>

            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-12">
              Bu bo'limda biz yaratgan loyihalarni ko'rishingiz mumkin. Har bir loyiha
              o'ziga xos dizayn va texnologiyalardan foydalangan.
            </p>

            {/* Stat cardlar */}
            <div
              ref={cardsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="stat-card p-6 rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-gray-400/30 backdrop-blur-sm hover:bg-orange-500/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-orange-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="w-full max-w-7xl mb-16 px-4 z-50">
            <ModernCarousel images={images} />
          </div>
        </>
      )}

      {/* Portfolio content - grid yoki detail */}
      <div className="w-full max-w-7xl mb-12">
        {currentView === "grid" ? (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Galereya ko'rgazmasi
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Loyihalarni ko'rish uchun kartochkaga bosing
              </p>
            </div>
            <PortfolioGrid onProjectClick={handleProjectClick} />
          </div>
        ) : (
          selectedSlug && <PortfolioDetail slug={selectedSlug} onBack={handleBack} />
        )}
      </div>

      {/* WhyWorkWithMe - faqat grid view da */}
      {currentView === "grid" && <WhyWorkWithMe />}
    </section>
  );
}