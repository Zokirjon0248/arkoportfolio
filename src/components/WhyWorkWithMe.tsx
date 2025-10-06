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
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nima uchun aynan men bilan ishlash kerak
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Why Work With Me
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto mt-6 leading-relaxed">
            Tajriba va innovatsiya birlashadi. Men ijodiy mukammallik va isbotlangan tajribani birlashtirgan 
            me'moriy yechimlarni taqdim etaman, har bir loyiha kutilganidan oshib ketishini ta'minlayman.
          </p>
        </div>

        {/* Two Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Experience & Stats */}
          <div 
            className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tajriba va Natijalar</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-blue-500/30 pl-6 hover:border-blue-500 transition-colors">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-blue-400">5</span>
                    <span className="text-xl text-gray-300">Yil</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Me'moriy dizayn va loyihalarni boshqarishdagi professional tajriba
                  </p>
                </div>

                <div className="border-l-2 border-purple-500/30 pl-6 hover:border-purple-500 transition-colors">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-purple-400">15+</span>
                    <span className="text-xl text-gray-300">Loyiha</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Turar-joy, tijorat va davlat sektorida muvaffaqiyatli yakunlangan
                  </p>
                </div>

                <div className="border-l-2 border-pink-500/30 pl-6 hover:border-pink-500 transition-colors">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-pink-400">20+</span>
                    <span className="text-xl text-gray-300">Happy Clients</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Trusted by individuals and businesses for exceptional architectural solutions
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-700">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Every project is delivered with <span className="text-blue-400 font-semibold">precision</span>, 
                    <span className="text-purple-400 font-semibold"> creativity</span>, and 
                    <span className="text-pink-400 font-semibold"> dedication</span> to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Why Choose Me */}
          <div 
            className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nega aynan meni tanlashadi</h3>
              </div>

              <div className="space-y-5">
                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Noyob Dizayn Yondashuvi
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Men zamonaviy estetikani funktsional innovatsiya bilan birlashtirib, ham chiroyli, 
                    ham maqsadga muvofiq bo'lgan fazolarni yarataman.
                  </p>
                </div>

                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Tafsilotlarga E'tibor
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Har bir element diqqat bilan ko'rib chiqiladi—dastlabki konsepsiyadan yakuniy 
                    bajarilishigacha—har bir jihatda mukammallikni ta'minlaydi.
                  </p>
                </div>

                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold text-pink-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    Tez va Aniq Muloqot
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Shaffof yangilanishlar, tezkor javoblar va butun loyiha davomida hamkorlikdagi yondashuv.
                  </p>
                </div>

                <div className="group/item p-4 rounded-xl hover:bg-gray-800/50 transition-all cursor-default">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    Barqaror Yechimlar
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Atrof-muhitni hurmat qilgan holda uzoq muddatli qiymat yaratadigan ekologik 
                    toza dizayn amaliyotlariga sodiqman.
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