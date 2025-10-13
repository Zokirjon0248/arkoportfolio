import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';

const WhyWorkWithMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full rounded-4xl bg-gradient-to-br from-gray-950 via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Sarlavha qismi */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nima uchun aynan biz bilan ishlashingiz kerak
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto mt-6 leading-relaxed">
            Tajriba va innovatsiya bir joyda. Biz ijodiy mukammallikni va ishonchli tajribani
            birlashtirgan yechimlarni taklif etamiz. Har bir loyiha siz kutganingizdan ham yuqori
            natija beradi.
          </p>
        </div>

        {/* Asosiy ikkita karta */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chap karta – Tajriba va natijalar */}
          <div
            className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tajriba va Natijalar</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-orange-500/30 pl-6 hover:border-orange-500 transition-colors">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-orange-400">5</span>
                    <span className="text-xl text-gray-300">Yil</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Me’moriy dizayn va loyihalarni boshqarish bo‘yicha professional tajriba
                  </p>
                </div>

                <div className="border-l-2 border-red-500/30 pl-6 hover:border-red-500 transition-colors">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-red-400">100+</span>
                    <span className="text-xl text-gray-300">Loyiha</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Turli turar-joy, tijorat va davlat loyihalari muvaffaqiyatli yakunlangan
                  </p>
                </div>

                <div className="border-l-2 border-yellow-500/30 pl-6 hover:border-yellow-500 transition-colors">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                      100+
                    </span>
                    <span className="text-xl text-gray-300">Mamnun mijozlar</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Yagona sifatli yechimlar orqali ishonch qozongan mijozlar
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-700">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Har bir loyiha{' '}
                    <span className="text-blue-400 font-semibold">aniqlik</span>,{' '}
                    <span className="text-purple-400 font-semibold">ijodkorlik</span> va{' '}
                    <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
                      fidoyilik
                    </span>{' '}
                    bilan bajariladi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* O‘ng karta – Nega meni tanlashadi */}
          <div
            className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nega aynan bizni tanlashadi</h3>
              </div>

              <div className="space-y-5">
                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-full"></span>
                    Noyob Dizayn Yondashuvi
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Zamonaviy estetikani funksional innovatsiya bilan uyg‘unlashtirib, chiroyli va
                    amaliy fazolar yaratamiz.
                  </p>
                </div>

                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Tafsilotlarga E’tibor
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Har bir element diqqat bilan o‘rganiladi — konsepsiyadan yakunigacha mukammallik
                    ta’minlanadi.
                  </p>
                </div>

                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-full"></span>
                    Tez va Aniq Muloqot
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Shaffof yangilanishlar, tezkor javoblar va har bosqichda hamkorlikdagi yondashuv.
                  </p>
                </div>

                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    Barqaror Yechimlar
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Atrof-muhitga e’tibor bilan, uzoq muddatli qiymat beruvchi ekologik dizayn
                    amaliyotlariga sodiqmiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithMe;
