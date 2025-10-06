"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Building2, Compass, Lightbulb, Users, Ruler, PenTool, Palette, Zap } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Arxitektura loyihasi",
      description: "Zamonaviy va funksional binolar uchun to'liq arxitektura loyihalash xizmati",
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Ichki dizayn",
      description: "Noyob va shaxsiy uslubdagi interer dizayn yechimlari",
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "3D vizualizatsiya",
      description: "Loyihangizni hayotiy ko'rinishda ko'ring - fotorealistik render",
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Konstruksiya nazorati",
      description: "Qurilish jarayonida professional nazorat va maslahat",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Landshaft dizayni",
      description: "Tashqi maydonlarni go'zal va ekologik jihatdan to'g'ri bezash",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Ekologik loyihalar",
      description: "Energiya tejovchi va tabiatga mos zamonaviy yechimlar",
    },
  ];

  const stats = [
    { number: 150, suffix: "+", label: "Tugallangan loyihalar" },
    { number: 12, suffix: "", label: "Yillik tajriba" },
    { number: 50, suffix: "+", label: "Professional jamoa" },
    { number: 98, suffix: "%", label: "Mijozlar qoniqishi" },
  ];

  return (
    <main className="text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Biz bilan{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              kelajakni yarating
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Innovatsion texnologiyalar, zamonaviy dizayn va kuchli jamoa — biz sizga ishonchli yechimlar taklif qilamiz.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 transition-all"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Xizmatlarimiz
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Biz haqimizda
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* BIZ HAQIMIZDA */}
      <section id="about" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Biz{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              kimlar
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Biz professional arxitektorlar va dizaynerlar jamoasimiz. Har bir loyihaga kreativlik, texnik bilim va mijoz ehtiyojlariga chuqur tushunish bilan yondashuvimiz mavjud.
          </p>
        </motion.div>

        {/* STATISTIKA - COUNTUP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center border border-gray-700 hover:border-purple-500 transition-all"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* QIYMATLAR */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="w-12 h-12" />,
              title: "Innovatsiya",
              desc: "Har doim yangi texnologiyalar va yondashuvlarni qo'llaymiz",
            },
            {
              icon: <Users className="w-12 h-12" />,
              title: "Jamoa ishi",
              desc: "Kuchli va professional jamoamiz bilan ishlash quvonch",
            },
            {
              icon: <Compass className="w-12 h-12" />,
              title: "Sifat",
              desc: "Har bir loyihada yuqori sifat va mijoz qoniqishi bizning maqsadimiz",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all backdrop-blur-sm"
            >
              <div className="text-blue-400 mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* XIZMATLAR */}
      <section id="services" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bizning{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              xizmatlarimiz
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Arxitektura va dizayn sohasida keng qamrovli professional xizmatlar taklif etamiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all group cursor-pointer"
            >
              <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Bepul maslahat oling
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
