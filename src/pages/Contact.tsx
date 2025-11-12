import { FaTelegram, FaInstagram, FaPhone } from 'react-icons/fa';
import React, { useState } from "react";

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
  label: string;
  hoverGradient: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, label, hoverGradient }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? hoverGradient : 'linear-gradient(to right, #d97706, #ea580c, #dc2626)'
      }}
      className="group relative inline-block p-3 rounded-full text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      aria-label={label}
    >
      <Icon className="text-2xl group-hover:animate-pulse" />
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
    { Icon: FaTelegram, href: 'https://t.me/arxdexium', label: 'Telegram', hoverGradient: 'linear-gradient(to right, #60a5fa, #2563eb)' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/arx_dexium', label: 'Instagram', hoverGradient: 'linear-gradient(to right, #7c3aed, #db2777, #b91c1c)' },
    { Icon: FaPhone, href: 'tel:+998993474703', label: 'Telefon: +998 99 347 47 03', hoverGradient: 'linear-gradient(to right, #4ade80, #16a34a)' },
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl mb-8">
          Biz bilan bog'laning
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Savolingiz yoki taklifingiz bormi? Biz har doim yordam berishga tayyormiz!
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} {...link} />
          ))}
        </div>
        <div className="p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Xabar yuboring
          </h3>
          <p className="text-gray-300 mb-6">
            Biz bilan bog'lanishdan tortinmang. Ijtimoiy tarmoqlarda yoki quyidagi forma orqali murojaat qiling.
          </p>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingiz"
                className="w-full px-4 py-2 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 bg-transparent"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 90 123 45 67"
                className="w-full px-4 py-2 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 bg-transparent"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabaringizni yozing..."
                rows={4}
                className="w-full px-4 py-2 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 bg-transparent"
                required
              ></textarea>
            </div>
            
            {status.message && (
              <div
                className={`p-4 rounded-xl text-sm flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/50"
                    : "bg-red-500/10 text-red-400 border border-red-500/50"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white hover:text-black hover:bg-white hover:bg-none px-4 rounded-full font-bold py-4 mt-4 hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Yuborilmoqda..." : "Yuborish"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;