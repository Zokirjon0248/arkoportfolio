"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  Instagram,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const infoRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // 🔥 Animatsiyalar
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Chap taraf (kontaktlar)
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
          },
        }
      );

      // O‘ng taraf (forma)
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );

      // Chap tarafdagi har bir link uchun kechikkan chiqish effekti
      const links = infoRef.current?.querySelectorAll(".contact-link");
      if (links) {
        gsap.fromTo(
          links,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            delay: 0.3,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async () => {
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const BOT_TOKEN = "8167130609:AAGEHbrCXpCw81o9ZFwuR7QKH0N97LOqfBI";
    const CHAT_ID = "-1003071068197";

    const text = `
🆕 *Yangi xabar! site 3*
👤 *Ism:* ${formData.name}
📞 *Telefon:* ${formData.phone}
💬 *Xabar:*
${formData.message}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      const data = await res.json();
      if (data.ok) {
        setStatus({
          type: "success",
          message: "Xabaringiz muvaffaqiyatli yuborildi!",
        });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Telegram API xatosi. Qayta urinib ko‘ring.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Xatolik yuz berdi. Internetni tekshirib qayta urinib ko‘ring.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) sendToTelegram();
  };

  return (
    <section className="min-h-screen text-white flex items-center justify-center px-4 py-10 sm:py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chap tomon */}
        <div ref={infoRef} className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent pb-4">
              Biz bilan bog‘laning
            </h1>
            <p className="text-neutral-400 text-lg">
              Savolingiz yoki taklifingiz bormi? Biz har doim yordam berishga tayyormiz.
            </p>
          </div>

          <div className="space-y-5">
            <a
              href="https://t.me/arx_dexium_design"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-4 border border-neutral-800 rounded-2xl px-6 py-4 hover:border-orange-500 hover:bg-neutral-900/60 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-xl">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Telegram</h3>
                <p className="text-neutral-400 text-sm">t.me/arx_dexium_design</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/arx_dexium"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-4 border border-neutral-800 rounded-2xl px-6 py-4 hover:border-orange-500 hover:bg-neutral-900/60 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Instagram</h3>
                <p className="text-neutral-400 text-sm">@arx_dexium</p>
              </div>
            </a>

            <a
              href="tel:+998901234567"
              className="contact-link flex items-center gap-4 border border-neutral-800 rounded-2xl px-6 py-4 hover:border-orange-500 hover:bg-neutral-900/60 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Telefon</h3>
                <p className="text-neutral-400 text-sm">+998 90 123 45 67</p>
              </div>
            </a>
          </div>
        </div>

        {/* Forma */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6">Xabar yuboring</h2>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-500" /> Ismingiz
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingiz"
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" /> Telefon raqamingiz
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 90 123 45 67"
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/30 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-red-500" /> Xabar
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Xabaringizni yozing..."
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 text-white resize-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none transition-all"
                required
              />
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-xl text-sm flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/50"
                    : "bg-red-500/10 text-red-400 border border-red-500/50"
                }`}
              >
                <CheckCircle2 className="w-5 h-5" /> {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white font-bold py-4 rounded-xl mt-4 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              {isLoading ? "Yuborilmoqda..." : "Yuborish"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
