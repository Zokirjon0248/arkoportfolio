"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
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

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { icon: <Building2 className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Arxitektura loyihasi", description: "Zamonaviy va funksional binolar uchun to'liq arxitektura loyihalash xizmati" },
    { icon: <PenTool className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Ichki dizayn", description: "Noyob va shaxsiy uslubdagi interer dizayn yechimlari" },
    { icon: <Compass className="w-10 sm:w-12 h-10 sm:h-12" />, title: "3D vizualizatsiya", description: "Loyihangizni hayotiy ko‘rinishda ko‘ring — fotorealistik render" },
    { icon: <Ruler className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Konstruksiya nazorati", description: "Qurilish jarayonida professional nazorat va maslahat" },
    { icon: <Palette className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Landshaft dizayni", description: "Tashqi maydonlarni go‘zal va ekologik jihatdan to‘g‘ri bezash" },
    { icon: <Zap className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Ekologik loyihalar", description: "Energiya tejovchi va tabiatga mos zamonaviy yechimlar" },
  ];

  const stats = [
    { number: 100, suffix: "+", label: "Tugallangan loyihalar" },
    { number: 50, suffix: "+", label: "Hamkor kompaniyalar" },
    { number: 5, suffix: "", label: "Yillik tajriba" },
    { number: 100, suffix: "%", label: "Mijozlar qoniqishi" },
  ];

  return (
    <main className="text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Biz bilan{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              kelajakni yarating
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Innovatsion texnologiyalar, zamonaviy dizayn va kuchli jamoa — biz sizga ishonchli yechimlar taklif qilamiz.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/portfolio")}
            className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-red-500/30 transition-all"
          >
            Xizmatlarimiz
          </motion.button>
        </motion.div>
      </section>

      {/* BIZ HAQIMIZDA */}
      <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Biz{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              kimlar
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Biz professional arxitektorlar va dizaynerlar jamoasimiz. Har bir loyihaga kreativlik, texnik bilim va mijoz ehtiyojlariga chuqur tushunish bilan yondashamiz.
          </p>
        </motion.div>

        {/* STATISTIKA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl text-center border border-gray-700 hover:border-red-600 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* QIYMATLAR */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: <Lightbulb className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Innovatsiya", desc: "Har doim yangi texnologiyalar va yondashuvlarni qo‘llaymiz" },
            { icon: <Users className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Jamoa ishi", desc: "Kuchli va professional jamoamiz bilan ishlash quvonch" },
            { icon: <Compass className="w-10 sm:w-12 h-10 sm:h-12" />, title: "Sifat", desc: "Har bir loyihada yuqori sifat va mijoz qoniqishi bizning maqsadimiz" },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-red-600 transition-all backdrop-blur-sm text-center"
            >
              <div className="text-red-500 mb-3 sm:mb-4 flex justify-center">{v.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* XIZMATLAR */}
      <section className="container mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Bizning{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              xizmatlarimiz
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Arxitektura va dizayn sohasida keng qamrovli professional xizmatlar taklif etamiz
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-red-600 transition-all group cursor-pointer"
            >
              <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center group-hover:text-red-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/Contact")}
            className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl mb-4 font-semibold text-base sm:text-lg shadow-lg hover:shadow-red-500/50 transition-all"
          >
            Bepul maslahat oling
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
