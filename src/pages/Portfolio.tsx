import CountUp from 'react-countup';
import DomeGallery from '@/components/DomeGallery';
import Demo from '@/components/GalleryData';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';

export default function Portfolio() {
  const stats = [
    { label: 'Loyihalar', value: 100, suffix: '+' },
    { label: 'Mijozlar', value: 100, suffix: '+' },
    { label: 'Tajriba', value: 5, suffix: '+ yil' },
    { label: 'Baholash', value: 4.9, suffix: '★', decimals: 1 }
  ];

  return (
    <section className="min-h-screen text-white px-4 md:px-8 py-10 md:py-16 flex flex-col items-center">
        <div className="relative max-w-7xl mx-auto px-4  text-center mb-10">
          
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-300">Yangi loyihalar uchun ochiq</span>
            </div>
          </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl text-center mb-8 md:mb-12">
            Bu bo'limda men yaratgan loyihalar to'plamini ko'rishingiz mumkin.
            Har bir loyiha o'ziga xos dizayn va texnologiyadan foydalanilgan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals || 0} 
                  />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      {/* DomeGallery 3D qismi */}
      <div className="w-full h-[60vh] md:h-[80vh] mb-10">
        <DomeGallery />
      </div>

      {/* Gallery cardlar qismi */}
      <div className="w-full max-w-7xl">
        <Demo />
      </div> 
      <WhyWorkWithMe />
    </section>
  );
}
