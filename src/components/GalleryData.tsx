// components/GalleryData.tsx
import  { useState, useEffect } from "react";
import {  ArrowLeft, Calendar, Tag } from "lucide-react";

// ============= DATA =============
export const portfolioData = [
  {
    id: "minimalizm-yotoqxona",
    slug: "minimalizm-yotoqxona",
    mainImage: "/1.1.jpg",
    title: "Minimalizm – sokinlikning kaliti",
    shortDescription: "Dam olish va xotirjamlik maskani",
    fullDescription: "Yotoqxona – bu dam olish va xotirjamlik maskani. Ortiqcha bezaklarsiz, faqat kerakli narsalar bilan to'ldirilgan makon sizga ichki tinchlikni his qilishga yordam beradi. Zamonaviy minimalistik dizayn orqali biz uyingizga tinchlik va tartib olib kelamiz.",
    category: "Yotoqxona",
    date: "2024",
    images: ["/1.1.jpg", "/1.2.jpg", "/1.3.jpg", "/1.4.jpg", "/1.5.jpg"],
    tags: ["Minimalizm", "Yotoqxona", "Zamonaviy"],
    features: [
      "Ortiqcha bezaklarsiz toza dizayn",
      "Funksional mebel tanlovi",
      "Neytral rang palitрasi",
      "Maksimal qulaylik"
    ]
  },
  {
    id: "zamonaviy-yotoqxona",
    slug: "zamonaviy-yotoqxona",
    mainImage: "/2.1.jpg",
    title: "Minimalistik yotoqxonada har kuni uyg'onish",
    shortDescription: "Haqiqiy dam olish manzili",
    fullDescription: "O'zingizga berilgan eng yaxshi sovg'a. Tashvishlardan yiroq, tartibli va toza joy — haqiqiy dam olish manzili. Har bir element diqqat bilan tanlab, sizning qulayligingiz uchun mo'ljallangan.",
    category: "Yotoqxona",
    date: "2024",
    images: ["/2.1.jpg", "/2.2.jpg", "/2.3.jpg", "/2.4.jpg", "/2.5.jpg"],
    tags: ["Dam olish", "Komfort", "Dizayn"],
    features: [
      "Toza va tartibli makon",
      "Yumshoq yoritish tizimi",
      "Premium materiallar",
      "Ergonomik yechimlar"
    ]
  },
  {
    id: "ideal-oshxona",
    slug: "ideal-oshxona",
    mainImage: "/3.1.jpg",
    title: "Sizning ideal oshxonangiz qanday bo'lishi kerak",
    shortDescription: "Zamonaviy va amaliy yechimlar",
    fullDescription: "Tartibli va zamonaviy oshxona — eng yaxshi tanlov. Biz sizga faqat go'zal ko'rinish emas, balki kundalik hayotingizni soddalashtiradigan amaliy yechimlarni taklif qilamiz.",
    category: "Oshxona",
    date: "2024",
    images: ["/3.1.jpg", "/3.2.jpg", "/3.3.jpg", "/3.4.jpg"],
    tags: ["Oshxona", "Funksional", "Modern"],
    features: [
      "Ergonomik planirovka",
      "Zamonaviy texnika",
      "Ko'p saqlash joylari",
      "Oson tozalash"
    ]
  },
  {
    id: "zamonaviy-hojatxona",
    slug: "zamonaviy-hojatxona",
    mainImage: "/4.1.jpg",
    title: "Kichik joy – katta imkoniyat!",
    shortDescription: "Zamonaviy va funksional hojatxona",
    fullDescription: "Hojatxona dizayni haqida o'ylayotganda, uni oddiygina texnik xona deb o'ylamang. To'g'ri tanlangan ranglar, dekor va sanitariya jihozlari yordamida bu joyni zamonaviy makonga aylantirish mumkin.",
    category: "Sanuzel",
    date: "2024",
    images: ["/4.1.jpg", "/4.2.jpg", "/4.3.jpg", "/4.4.jpg"],
    tags: ["Hojatxona", "Kichik", "Optimal"],
    features: [
      "Makonni tejash",
      "Zamonaviy jihozlar",
      "Yorug'lik dizayni",
      "Premium materiallar"
    ]
  },
  {
    id: "oshxona-yuragi",
    slug: "oshxona-yuragi",
    mainImage: "/5.1.jpg",
    title: "Oshxona – uy yuragi!",
    shortDescription: "Har kuni ilhom baxsh etadigan oshxona",
    fullDescription: "Biz siz orzu qilgan oshxonani yaratamiz: zamonaviy, qulay, chiroyli va har kuni ilhom baxsh etadigan.",
    category: "Oshxona",
    date: "2024",
    images: ["/5.1.jpg", "/5.2.jpg", "/5.3.jpg"],
    tags: ["Oshxona", "Ilhom", "Dizayn"],
    features: [
      "Inspiratsion dizayn",
      "Oilaviy muhit",
      "Funksional joy",
      "Chiroyli detallar"
    ]
  },
  {
    id: "klassik-eksteryer",
    slug: "klassik-eksteryer",
    mainImage: "/6.1.jpg",
    title: "Klassik uslubdagi eksteryer dizayni",
    shortDescription: "Nafislik va uyg'unlik",
    fullDescription: "Klassik uslub — bu nafislik, uyg'unlik va vaqt sinovidan o'tgan go'zallik uyg'unligidir.",
    category: "Eksteryer",
    date: "2024",
    images: ["/6.1.jpg", "/6.2.jpg", "/6.3.jpg", "/6.4.jpg", "/6.5.jpg"],
    tags: ["Klassik", "Eksteryer", "Nafis"],
    features: [
      "Klassik uslub elementlari",
      "Timeless dizayn",
      "Sifatli materiallar",
      "Professional bajarish"
    ]
  },
  {
    id: "tashqi-korinish",
    slug: "tashqi-korinish",
    mainImage: "/7.1.jpg",
    title: "Tashqi ko'rinish — birinchi taassurot",
    shortDescription: "Professional eksteryer dizayni",
    fullDescription: "Uyingiz yoki binongizning tashqi ko'rinishi siz haqingizda ko'p narsani aytadi.",
    category: "Eksteryer",
    date: "2024",
    images: ["/7.1.jpg", "/7.2.jpg", "/7.3.jpg", "/7.4.jpg"],
    tags: ["Eksteryer", "Birinchi taassurot", "Professional"],
    features: [
      "Unikal dizayn",
      "Zamonaviy yechimlar",
      "Chidamli materiallar",
      "Estetik ko'rinish"
    ]
  },
  {
    id: "minimalist-eksteryer",
    slug: "minimalist-eksteryer",
    mainImage: "/8.1.jpg",
    title: "Hashamatdan yiroq",
    shortDescription: "Zamonaviy va chiroyli eksteryer",
    fullDescription: "Agar siz hashamatdan yiroq, ammo chiroyli va zamonaviy eksteryer istasangiz — bu uslub aynan siz uchun.",
    category: "Eksteryer",
    date: "2024",
    images: ["/8.1.jpg", "/8.2.jpg", "/8.3.jpg"],
    tags: ["Minimalizm", "Zamonaviy", "Sodda"],
    features: [
      "Minimalistik yondashuv",
      "Toza liniyalar",
      "Sodda va chiroyli",
      "Zamonaviy texnologiyalar"
    ]
  },
  {
    id: "zamonaviy-sanuzel",
    slug: "zamonaviy-sanuzel",
    mainImage: "/9.1.jpg",
    title: "Zamonaviy, oson tozalanadigan va qulay sanuzel",
    shortDescription: "Funksional va estetik sanuzel",
    fullDescription: "Agar siz zamonaviy, oson tozalanadigan va qulay sanuzel yaratmoqchi bo'lsangiz — bizning dizayn variantlarimiz aynan shunday talablarni qondiradi.",
    category: "Sanuzel",
    date: "2024",
    images: ["/9.1.jpg", "/9.2.jpg", "/9.3.jpg", "/9.4.jpg", "/9.5.jpg", "/9.6.jpg"],
    tags: ["Sanuzel", "Zamonaviy", "Qulay"],
    features: [
      "Oson tozalash",
      "Zamonaviy jihozlar",
      "Optimal planirovka",
      "Sifatli materiallar"
    ]
  },
  {
    id: "nafis-yotoqxona",
    slug: "nafis-yotoqxona",
    mainImage: "/10.1.jpg",
    title: "Oddiy, ammo estetik jihatdan nafis",
    shortDescription: "Tinchlantiruvchi yotoqxona",
    fullDescription: "Agar siz oddiy, ammo estetik jihatdan nafis va tinchlantiruvchi yotoqxona yaratmoqchi bo'lsangiz, minimalizm uslubi aynan siz uchun!",
    category: "Yotoqxona",
    date: "2024",
    images: ["/10.1.jpg", "/10.2.jpg", "/10.3.jpg", "/10.4.jpg", "/10.5.jpg"],
    tags: ["Minimalizm", "Nafis", "Tinchlik"],
    features: [
      "Estetik nafislik",
      "Tinchlantiruvchi muhit",
      "Minimal dekor",
      "Maksimal komfort"
    ]
  },
  {
    id: "iliq-mehmonxona",
    slug: "iliq-mehmonxona",
    mainImage: "/11.1.jpg",
    title: "Mehmonxona — birinchi taassurot joyi",
    shortDescription: "Iliq va qulay mehmonxona",
    fullDescription: "Mehmonxona — bu tashrif buyuruvchilar birinchi taassurotni hosil qiladigan joy. Shuning uchun har bir detal iliqlik, qulaylik va nafislik uyg'unligida yaratildi. Har bir mehmonga uydek iliq tuyg'u bag'ishlaydigan dizayn." ,
    category: "Mehmonxona",
    date: "2024",
    images: ["/11.1.jpg", "/11.2.jpg", "/11.3.jpg", "/11.4.jpg", "/11.5.jpg"],
    tags: ["Mehmonxona", "Iliq", "Qulay"],
    features: [
      "Iliq atmosfera",
      "Mehmondo'stlik",
      "Nafis detallar",
      "Qulay mebel"
    ]
  },
  {
    id: "Neo-Classic yotoqxona — sokinlik va hashamat uyg‘unligi",
    slug: "Neo-Classic yotoqxona — sokinlik va hashamat uyg‘unligi",
    mainImage: "/12.1.jpg",
    title: "Mukammal uyg‘unlikdagi yotoqxona dizayni",
    shortDescription: "Sokin va estetik yotoqxona",
    fullDescription:`Neo-classic yotoqxona — zamonaviylik va klassikaning eng nozik uyg‘unligi.
Toza chiziqlar, yengil bezaklar va sokin ranglar xonaga hashamat bilan birga tinchlik baxsh etadi.
Har bir detal — yorug'lik, tekstura va kompozitsiya — mukammallik uchun mo'ljallangan.` 
   ,
    category: "Yotoqxona",
    date: "2024",
    images: [" /12.1.jpg", "/12.2.jpg", "/12.3.jpg", "/12.4.jpg", "/12.5.jpg", "/12.6.jpg"],
    tags: [
  "Neo-Classic",
  "Yotoqxona",
  "Zamonaviy",
  "Nafislik",
  "Yengil atmosfera",
  "Tinchlik",
  "Hashamat"
],
   features: [
  "Yumshoq va tarqoq yoritish",
  "Panoramali deraza yechimlari",
  "Past balandlikdagi minimalistik mebel",
  "Ortopedik yotoq tizimi",
  "Teksturali devor panellari",
  "Tabiiy ranglar uyg‘unligi",
  "Mukammal uyg‘unlashtirilgan dekor",
  "Optimal makon planirovkasi"
]

  },
{
  id: "noodatiy-mehmonxona",
  slug: "noodatiy-mehmonxona",
  mainImage: "/13.5.jpg",
  title: "Noodatiy mehmonxona interyeri — mehmonlar uchun unutilmas tajriba",
  shortDescription: "Iliq, zamonaviy va o‘ziga xos mehmonxona dizayni",
  fullDescription: `
Noodatiy mehmonxona interyeri — mehmonlar uchun haqiqiy unutilmas tajriba.
Bu makonda har bir detal kayfiyat yaratadi, har bir chiroq esa atmosferani shakllantiradi.
Mehmonxonangiz endi shunchaki tunash joyi emas —  
balki o‘ziga xos tajriba markazi bo‘lishi mumkin.

Zamonaviy yoritish, teksturali devor panellari, yaxshi tanlangan mebel va iliq rang palitrasi mehmonlarda uydek hissiyot uyg‘otadi.
Har bir burchak — professional dizaynning davomidir.
`,
  category: "Mehmonxona",
  date: "2024",
  images: ["/13.1.jpg", "/13.2.jpg", "/13.3.jpg", "/13.4.jpg", "/13.5.jpg", "/13.6.jpg"],
  tags: [
    "Mehmonxona",
    "Iliq atmosfera",
    "Zamonaviy dizayn",
    "Qulaylik",
    "Premium interyer",
    "Estetik yondashuv"
  ],
  features: [
    "Iliq va tarqoq yoritish tizimi",
    "Mehmonlarga qulay mebel tanlovi",
    "Teksturali devor panellari",
    "Premium teksturalardan foydalanish",
    "Ergonomik planirovka",
    "Professional dekor uyg‘unligi",
    "Mehmonlar uchun yoqimli atmosfera",
    "Unutilmas vizual tajriba"
  ]
},
{
  id: "noodatiy-oshxona",
  slug: "noodatiy-oshxona",
  mainImage: "/14.1.jpg",
  title: "Noodatiy oshxona interyeri — funksional va zamonaviy yechim",
  shortDescription: "Estetik, qulay va innovatsion oshxona dizayni",
  fullDescription: `
Zamonaviy oshxona dizayni ✨
Qulaylik, estetika va mukammallik bir makonda jam bo‘ldi.
Bu oshxona — nafaqat taom tayyorlaydigan joy, balki ilhom, qulaylik va zamonaviylik
uchun yaratilgan makon.

Yengil rang palitrasi, ergonomik planirovka, sifatli materiallar va oqilona yoritish 
har bir jarayonga yoqimli atmosfera yaratadi.
Oshxona uydagi eng faol joy — biz uni maksimal funksional, zamonaviy va estetik qildik.
`,
  category: "Oshxona",
  date: "2024",
  images: ["/14.1.jpg", "/14.2.jpg", "/14.3.jpg", "/14.4.jpg", "/14.5.jpg"],
  tags: [
    "Oshxona",
    "Zamonaviy",
    "Funksional",
    "Minimalizm",
    "Quvvat tejamkor texnika",
    "Estetik dizayn"
  ],
  features: [
    "Ergonomik va qulay planirovka",
    "Zamonaviy oshxona texnikalari integratsiyasi",
    "Keng ish sathi",
    "Oson tozalanadigan materiallar",
    "Yorug'likning to‘g‘ri joylashuvi",
    "Ko‘p funksiyali saqlash bo‘limlari",
    "Minimalistik va chiroyli dizayn",
    "Issiq va sovuq yoritish uyg‘unligi"
  ]
},
{
  id: "zamonaviy-sanuzel-noodatiy",
  slug: "zamonaviy-sanuzel-noodatiy",
  mainImage: "/15.1.jpg",
  title: "Zamonaviy va noodatiy sanuzel — maksimal qulaylik va estetik uyg‘unlik",
  shortDescription: "Toza, funksional va zamonaviy sanuzel dizayni",
  fullDescription: `
Zamonaviy sanuzel dizayni ✨  
Qulaylik, gigiyena va estetika bir joyda jam bo‘lgan makon.

Har bir detal — material tanlovidan tortib, yoritishgacha — qulaylikni oshirish uchun 
o‘ylangan. Yengil ranglar, tabiiy yuzalar va ergonomik yechimlar sanuzelni yanada 
yorqin, toza va keng his ettiradi.

Bu sanuzel — nafaqat kundalik ehtiyojlar uchun joy, balki sokinlik va tozalik 
muhitini taqdim etadigan makon. Zamonaviy jihozlar va optimal planirovka 
har bir jarayonni osonlashtiradi.
`,
  category: "Sanuzel",
  date: "2024",
  images: ["/15.1.jpg", "/15.2.jpg", "/15.3.jpg", "/15.4.jpg", "/15.5.jpg"],
  tags: [
    "Sanuzel",
    "Zamonaviy",
    "Minimalistik",
    "Toza dizayn",
    "Gigiyena",
    "Ergonomik yechim",
    "Estetik atmosfera"
  ],
  features: [
    "Sifatli va suvga chidamli materiallar",
    "Optimal planirovka",
    "Yengil va toza rang palitrasi",
    "Yumshoq yoritish tizimi",
    "Oson tozalanadigan yuzalar",
    "Zamonaviy sanitariya jihozlari",
    "Amaliy saqlash bo‘limlari",
    "Ventilyasiyaning yaxshilangan tizimi"
  ]
},
{
  id: "zamonaviy-mehmonxona-noodatiy",
  slug: "zamonaviy-mehmonxona-noodatiy",
  mainImage: "/16.1.jpg",
  title: "Zamonaviy va noodatiy mehmonxona — iliqlik, qulaylik va estetik uyg‘unlik",
  shortDescription: "O‘ziga xos, zamonaviy va mehmonlarni hayratda qoldiradigan mehmonxona interyeri",
  fullDescription: `
Zamonaviy mehmonxona dizayni ✨  
Iliq atmosfera, qulaylik va estetik uyg‘unlik birlashgan makon.

Mehmonxona — uyning yuragi, mehmonlarni kutib olish va oila davrasida suhbat qurish
uchun mo‘ljallangan joy. Shuning uchun har bir detal — yoritish, mebel, tekstura
va joylashuv — maksimal qulaylikni ta’minlash uchun o‘ylangan.

Yengil rang palitrasi, yumshoq yoritish, tabiatga yaqin materiallar va keng
planirovka mehmonxonani yanada sokin, keng va yoqimli muhitga aylantiradi.

Bu mehmonxona zamonaviylik bilan iliqlikning mukammal uyg‘unligi bo‘lib,
har kuni sizni va mehmonlaringizni iliq kutib oladigan makon yaratadi.
  `,
  category: "Mehmonxona",
  date: "2024",
  images: ["/16.1.jpg", "/16.2.jpg", "/16.3.jpg", "/16.4.jpg"],
  tags: [
    "Mehmonxona",
    "Zamonaviy dizayn",
    "Iliq atmosfera",
    "Minimalistik yondashuv",
    "Estetik interyer",
    "Yumshoq yoritish"
  ],
  features: [
    "Keng va yorqin planirovka",
    "Iliq ranglar uyg‘unligi",
    "Yumshoq va funksional mebel tanlovi",
    "Tabiiy materiallardan foydalanish",
    "Dekor elementlarining uyg‘un joylashuvi",
    "Ko‘p pog‘onali yoritish tizimi",
    "Minimalistik lekin estetik dizayn",
    "Mehmonlar uchun qulay va yoqimli atmosfera"
  ]
},


];

// ============= PORTFOLIO GRID (List view) =============
export const PortfolioGrid = ({ onProjectClick }: { onProjectClick: (slug: string) => void }) => {
  const [filter, setFilter] = useState("Barchasi");
  const categories = ["Barchasi", ...new Set(portfolioData.map(p => p.category))];
  
  const filteredProjects = filter === "Barchasi" 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project.slug)}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs">
                  {project.images.length} rasm
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.shortDescription}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============= PORTFOLIO DETAIL (Single project) =============
export const PortfolioDetail = ({ slug, onBack }: { slug: string; onBack: () => void }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const project = portfolioData.find(p => p.slug === slug);
  
  useEffect(() => {
    setIsImageLoaded(false);
    const timer = setTimeout(() => setIsImageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Loyiha topilmadi</h2>
          <button onClick={onBack} className="text-orange-400 hover:underline">
            Orqaga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 -mx-4 md:-mx-8 px-4 md:px-8 mb-8">
        <div className="max-w-7xl mx-auto py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Orqaga</span>
          </button>
          <div className="h-6 w-px bg-gray-700" />
          <span className="text-orange-400 font-semibold">{project.category}</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">{project.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {project.fullDescription}
        </p>
      </div>

      {/* Main Image */}
      <div className="mb-8 rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
        <div className="relative h-[500px] flex items-center justify-center">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={project.images[selectedImage]}
            alt={`${project.title} - Image ${selectedImage + 1}`}
            className={`max-w-full max-h-full object-contain transition-all duration-500 ${
              isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
            {selectedImage + 1} / {project.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 flex gap-3 overflow-x-auto">
          {project.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImage === idx
                  ? "ring-4 ring-orange-500 scale-95"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Features */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Tag className="w-6 h-6 text-orange-400" />
            Asosiy xususiyatlar
          </h3>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-6">Teglar</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-800 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500 rounded-lg transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <a href="/contact">
            <p className="text-gray-400 mb-4">Sizga ham shunday loyiha kerakmi?</p>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50">
              Biz bilan bog'lanish
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};