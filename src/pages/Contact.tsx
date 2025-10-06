"use client"

import React, { useState } from "react"
import { Send, User, Phone, MessageSquare, CheckCircle2, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendToTelegram = async () => {
    setIsLoading(true)
    setStatus({ type: "", message: "" })

    const BOT_TOKEN = "8167130609:AAGEHbrCXpCw81o9ZFwuR7QKH0N97LOqfBI"
    const CHAT_ID = "-4813870397"

    const text = `🆕 Yangi xabar!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar:\n${formData.message}`

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
      })

      const data = await res.json()

      if (data.ok) {
        setStatus({ type: "success", message: "Xabaringiz muvaffaqiyatli yuborildi!" })
        setFormData({ name: "", phone: "", message: "" })
      } else throw new Error("Telegram API xatosi")
    } catch {
      setStatus({ type: "error", message: "Xatolik yuz berdi. Qayta urinib ko‘ring." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.message) sendToTelegram()
  }

  return (
    <section className="min-h-screen text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chap tomonda ma’lumotlar */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent pb-4">
              Biz bilan bog‘laning
            </h1>
            <p className="text-neutral-400 mt-4 text-lg">
              Savolingiz yoki taklifingiz bormi? Biz har doim yordam berishga tayyormiz.
            </p>
          </div>

          <div className="space-y-5">
            <a
              href="https://t.me/yourgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-neutral-800 rounded-2xl px-6 py-4 hover:border-orange-500 transition-all duration-300 hover:bg-neutral-900/60"
            >
              <div className="p-3 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-xl">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Telegram</h3>
                <p className="text-neutral-400 text-sm">@yourgroup</p>
              </div>
            </a>

            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-neutral-800 rounded-2xl px-6 py-4 hover:border-orange-500 transition-all duration-300 hover:bg-neutral-900/60"
            >
              <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Instagram</h3>
                <p className="text-neutral-400 text-sm">@yourprofile</p>
              </div>
            </a>

            <a
              href="tel:+998901234567"
              className="flex items-center gap-4 border border-neutral-800 rounded-2xl px-6 py-4 hover:border-orange-500 transition-all duration-300 hover:bg-neutral-900/60"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Telefon</h3>
                <p className="text-neutral-400 text-sm">+998 90 123 45 67</p>
              </div>
            </a>
          </div>
        </div>

        {/* O‘ng tomonda forma */}
        <form
          onSubmit={handleSubmit}
          className="border border-neutral-800 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl"
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
  )
}
