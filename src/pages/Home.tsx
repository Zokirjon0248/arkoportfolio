"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Compass,
  Lightbulb,
  Users,
  Ruler,
  PenTool,
  Palette,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Building2 className="w-10 sm:w-12 h-10 sm:h-12" />,
      title: "Arxitektura loyihasi",
      description:
        "Zamonaviy va funksional binolar uchun to'liq arxitektura loyihalash xizmati",
    },
    {
      icon: <PenTool className="w-10 sm:w-12 h-10 sm:h-12" />,
      title: "Ichki dizayn",
      description: "Noyob va shaxsiy uslubdagi interer dizayn yechimlari",
    },
    {
      icon: <Compass className="w-10 sm:w-12 h-10 sm:h-12" />,
      title: "3D vizualizatsiya",
      description:
        "Loyihangizni hayotiy ko'rinishda ko'ring — fotorealistik render",
    },
    {
      icon: <Ruler className="w-10 sm:w-12 h-10 sm:h-12" />,
      title: "Konstruksiya nazorati",
      description: "Qurilish jarayonida professional nazorat va maslahat",
    },
    {
      icon: <Palette className="w-10 sm:w-12 h-10 sm:h-12" />,
      title: "Landshaft dizayni",
      description:
        "Tashqi maydonlarni go'zal va ekologik jihatdan to'g'ri bezash",
    },
    {
      icon: <Zap className="w-10 sm:w-12 h-10 sm:h-12" />,
      title: "Ekologik loyihalar",
      description: "Energiya tejovchi va tabiatga mos zamonaviy yechimlar",
    },
  ];

  const stats = [
    { number: 100, suffix: "+", label: "Tugallangan loyihalar" },
    { number: 50, suffix: "+", label: "Hamkor kompaniyalar" },
    { number: 5, suffix: "", label: "Yillik tajriba" },
    { number: 100, suffix: "%", label: "Mijozlar qoniqishi" },
  ];
interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number; // ms
}
  // CountUp component
 
const CountUp: React.FC<CountUpProps> = ({ end, suffix = "", duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        setHasAnimated(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return <>{count}{suffix}</>;
};;

  return (
    <main className="text-white min-h-screen overflow-hidden ">
      {/* HERO */}
      <section className="relative container mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-32 md:py-20 text-center">
        {/* Background Gradient Effects */}
     

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-600/30 rounded-full text-sm font-medium text-orange-400 backdrop-blur-sm">
              Professional arxitektura xizmatlari
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 sm:mb-2 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              Biz bilan
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            >
              kelajakni yarating!
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Innovatsion texnologiyalar, zamonaviy dizayn va kuchli jamoa — biz
            sizga ishonchli yechimlar taklif qilamiz.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/portfolio")}
            className="relative group bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 
             text-white px-10 sm:px-12 md:px-14 py-4 sm:py-5 
             rounded-full font-bold text-lg sm:text-xl 
             shadow-2xl shadow-orange-600/50
             transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Xizmatlarimiz</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </section>

      {/* BIZ HAQIMIZDA */}
      <section className="relative container mx-auto px-4 sm:px-6 md:px-10 py-24 sm:py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6"
          >
            Biz{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              haqimizda
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Biz professional arxitektorlar va dizaynerlar jamoasimiz. Har bir
            loyihaga kreativlik, texnik bilim va mijoz ehtiyojlariga chuqur
            tushunish bilan yondashamiz.
          </motion.p>
        </motion.div>

        {/* STATISTIKA */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08
              }}
              className="relative group bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 sm:p-10 rounded-3xl border border-gray-800 hover:border-orange-600 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:via-orange-600/5 group-hover:to-red-600/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3"
                >
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </motion.h3>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium">{stat.label}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* QIYMATLAR */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              icon: <Lightbulb className="w-12 sm:w-16 h-12 sm:h-16" />,
              title: "Innovatsiya",
              desc: "Har doim yangi texnologiyalar va yondashuvlarni qo'llaymiz",
            },
            {
              icon: <Users className="w-12 sm:w-16 h-12 sm:h-16" />,
              title: "Jamoa ishi",
              desc: "Kuchli va professional jamoamiz bilan ishlash quvonch",
            },
            {
              icon: <Compass className="w-12 sm:w-16 h-12 sm:h-16" />,
              title: "Sifat",
              desc: "Har bir loyihada yuqori sifat va mijoz qoniqishi bizning maqsadimiz",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15
              }}
              className="relative group bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 sm:p-12 rounded-3xl border border-gray-800 hover:border-orange-600 transition-all duration-500 text-center overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-orange-500 mb-6 flex justify-center"
                >
                  {v.icon}
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  {v.desc}
                </p>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* XIZMATLAR */}
      <section className="relative container mx-auto px-4 sm:px-6 md:px-10 py-24 sm:py-32 md:py-40">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24 relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6"
          >
            Bizning{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              xizmatlarimiz
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Arxitektura va dizayn sohasida keng qamrovli professional xizmatlar
            taklif etamiz
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -20
              }}
              className="relative group bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 sm:p-10 rounded-3xl border-2 border-gray-800 hover:border-orange-600 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-orange-600/0 to-red-600/0 group-hover:from-orange-600/20 group-hover:via-orange-600/10 group-hover:to-red-600/20 transition-all duration-700"></div>
              
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-orange-500 group-hover:text-orange-400 mb-6 flex justify-center transition-colors duration-300"
                >
                  {s.icon}
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 text-center group-hover:text-orange-500 transition-colors duration-300">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-base sm:text-lg text-center transition-colors duration-300">
                  {s.description}
                </p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-600/0 group-hover:border-orange-600/50 rounded-tl-3xl transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-600/0 group-hover:border-orange-600/50 rounded-br-3xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-24 relative z-10"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/Contact")}
            className="relative group bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-12 sm:px-16 py-5 sm:py-6 rounded-full font-bold text-lg sm:text-xl shadow-2xl shadow-orange-600/50 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Bepul maslahat oling</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}