import { useState, useEffect } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle2, Instagram, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const sendToTelegram = async () => {
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const BOT_TOKEN = '8167130609:AAGEHbrCXpCw81o9ZFwuR7QKH0N97LOqfBI';
    const CHAT_ID = '-4813870397';
    
    const text = `🆕 Yangi xabar!\n\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n💬 Xabar:\n${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      const data = await response.json();

      if (data.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Telegram API xatosi');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (formData.name && formData.email && formData.message) {
    sendToTelegram();
  }
};


  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient text */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-400">
              Aloqa
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Biz bilan bog'laning
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Savollaringiz yoki takliflaringiz bormi? Biz har doim sizning xabarlaringizni kutamiz va tezkor javob berishga tayyormiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Sidebar - Slides from left */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group">
              <h2 className="text-2xl font-bold text-white mb-8">Biz bilan aloqa</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-medium group-hover/item:text-blue-400 transition-colors">info@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telefon</p>
                    <p className="text-white font-medium group-hover/item:text-purple-400 transition-colors">+998 90 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl border border-pink-500/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <Instagram className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Instagram</p>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-pink-400 transition-colors">
                      @yourprofile
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telegram</p>
                    <p className="text-white font-medium group-hover/item:text-green-400 transition-colors">@yourgroup</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Manzil</p>
                    <p className="text-white font-medium group-hover/item:text-orange-400 transition-colors">Toshkent, O'zbekiston</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl border border-cyan-500/30 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Ish vaqti</p>
                    <p className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">Dushanba - Juma</p>
                    <p className="text-gray-400 text-sm">9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-500/30 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500 text-center group cursor-pointer"
              >
                <Instagram className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-pink-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-white font-medium mb-1 group-hover:text-pink-400 transition-colors">Instagram</p>
                <p className="text-gray-400 text-sm group-hover:text-pink-300 transition-colors">@yourprofile</p>
              </a>
              
              <a 
                href="https://t.me/yourgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-500/30 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 text-center group cursor-pointer"
              >
                <MessageSquare className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-blue-400 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                <p className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Telegram</p>
                <p className="text-gray-400 text-sm group-hover:text-blue-300 transition-colors">@yourgroup</p>
              </a>
            </div>
          </div>

          {/* Contact Form - Slides from right */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:bg-white/10 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Xabar yuboring</h2>
                <p className="text-gray-400">Barcha maydonlarni to'ldiring va biz sizga tezda javob beramiz</p>
              </div>

              <div className="space-y-6">
                <div className="group/input">
                  <label className="flex items-center text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                    <User className="w-4 h-4 mr-2 text-blue-400 group-hover/input:scale-125 transition-transform" />
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:scale-[1.01] transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div className="group/input">
                  <label className="flex items-center text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                    <Mail className="w-4 h-4 mr-2 text-purple-400 group-hover/input:scale-125 transition-transform" />
                    Email manzilingiz
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:scale-[1.01] transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="group/input">
                  <label className="flex items-center text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                    <MessageSquare className="w-4 h-4 mr-2 text-pink-400 group-hover/input:scale-125 transition-transform" />
                    Xabaringiz
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:scale-[1.01] transition-all duration-300 resize-none hover:bg-white/10 hover:border-pink-500/30"
                    placeholder="Xabaringizni bu yerga yozing..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl flex items-center gap-3 border backdrop-blur-sm animate-bounce-in ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/30 text-green-300' 
                      : 'bg-red-500/10 border-red-500/30 text-red-300'
                  }`}>
                    {status.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0 animate-spin-once" />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-5 px-8 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <span>Xabar yuborish</span>
                      <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        
        @keyframes spin-once {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        
        .animate-spin-once {
          animation: spin-once 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}