import { FaTelegram, FaInstagram, FaPhone, FaPaperPlane } from 'react-icons/fa';
import React, { useState } from "react";

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, label, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
        isHovered ? 'scale-110 shadow-xl' : 'scale-100'
      } bg-gradient-to-br ${color} hover:shadow-2xl`}
      aria-label={label}
    >
      <Icon className="text-2xl text-white group-hover:scale-110 transition-transform" />
      <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-slate-900/90 backdrop-blur-md text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-700 pointer-events-none z-50">
        {label}
      </span>
    </a>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const socialLinks = [
    { Icon: FaTelegram, href: 'https://t.me/arxdexium', label: 'Telegram', color: 'from-cyan-500 to-blue-600' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/arx_dexium', label: 'Instagram', color: 'from-pink-500 to-orange-500' },
    { Icon: FaPhone, href: 'tel:+998993474703', label: 'Telefon: +998 99 347 47 03', color: 'from-emerald-500 to-teal-600' },
  ];

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
          message: "Telegram API xatosi. Qayta urinib ko'ring.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Xatolik yuz berdi. Internetni tekshirib qayta urinib ko'ring.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) sendToTelegram();
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 mb-4">
            Biz bilan bog'laning
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Savolingiz yoki taklifingiz bormi? Biz har doim yordam berishga tayyormiz va sizning so'rovlaringizga javob berish uchun kutmoqdamiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
              <h3 className="text-3xl font-bold text-white">
                Xabar yuboring
              </h3>
            </div>
            <p className="text-slate-300 mb-8">
              Biz bilan bog'lanishdan tortinmang. Ijtimoiy tarmoqlarda yoki quyidagi forma orqali murojaat qiling.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Ismingiz</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="To'liq ismingizni kiriting"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Telefon raqami</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                  className="w-full px-4 py-3 bg-white/5 border border-orange-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Xabaringiz</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sizning xabaringizni yozing..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm flex items-center gap-2 backdrop-blur-sm ${
                    status.type === "success"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                      : "bg-red-500/20 text-red-300 border border-red-500/50"
                  }`}
                >
                  <span className="text-lg">{status.type === "success" ? "✓" : "✕"}</span>
                  {status.message}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/50 group"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                {isLoading ? "Yuborilmoqda..." : "Xabarni yuborish"}
              </button>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-between hover:bg-white/15 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-pink-600 rounded-full" />
                <h3 className="text-3xl font-bold text-white">
                  Biz bilan bog'laning
                </h3>
              </div>
              
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                Quyidagi ijtimoiy tarmoqlar orqali biz bilan bog'laning yoki bevosita qo'ng'iroq qiling.
              </p>

              <div className="space-y-6 mb-12">
                {socialLinks.map((link, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <SocialIcon {...link} />
                      <div>
                        <p className="text-sm text-slate-400 font-medium">Bizga yozing</p>
                        <p className="text-white font-semibold">{link.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-300 mb-2">⏱️ Javob vaqti</p>
              <p className="text-white font-semibold">Odatda 24 soatda javob beramiz</p>
              <p className="text-slate-400 text-sm mt-2">Sizning so'rovingiz bizga juda muhim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
