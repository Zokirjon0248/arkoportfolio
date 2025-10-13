import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface GalleryCardProps {
  mainImage: string;
  title: string;
  description: string;
  relatedImages?: string[];
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  mainImage,
  title,
  description,
  relatedImages = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const allImages = [mainImage, ...relatedImages];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setSelectedImage(mainImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleThumbnailClick = (image: string) => {
    if (image !== selectedImage) {
      setIsImageChanging(true);
      setTimeout(() => {
        setSelectedImage(image);
        setIsImageChanging(false);
      }, 150);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Card */}
      <div
        className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700"
        style={{
          animation: "fadeInUp 0.6s ease-out forwards",
          animationDelay: `${Math.random() * 0.3}s`
        }}
      >
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={openModal}
        >
          <img
            src={mainImage}
            alt={title}
            className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                📸 Ko'rish uchun bosing
              </p>
            </div>
          </div>
          {relatedImages.length > 0 && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
              +{relatedImages.length} rasm
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={handleOverlayClick}
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden bg-gray-900"
            style={{ animation: "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2.5 bg-white rounded-full hover:bg-red-500 hover:rotate-90 transition-all duration-300 shadow-lg hover:scale-110 group"
            >
              <X className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
              {allImages.indexOf(selectedImage) + 1} / {allImages.length}
            </div>

            {/* Main image */}
            <div className="w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900">
              <img
                src={selectedImage}
                alt="Selected"
                className={`max-w-full max-h-full object-contain transition-all duration-500 ${isImageChanging ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
                  }`}
              />
            </div>

            {/* Thumbnails */}
            <div className="p-5 flex gap-3 overflow-x-auto bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {allImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(image)}
                  style={{
                    animation: "slideInRight 0.5s ease-out forwards",
                    animationDelay: `${idx * 0.05}s`
                  }}
                  className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 transform ${selectedImage === image
                    ? "ring-4 ring-blue-500 scale-95 shadow-xl shadow-blue-500/50"
                    : "hover:ring-2 hover:ring-gray-400 hover:scale-110 hover:-translate-y-2 opacity-70 hover:opacity-100"
                    }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Demo = () => {
  const galleryData = [
    {
      mainImage: "/1.1.jpg",
      title: "Minimalizm – sokinlikning kaliti.",
      description: "Yotoqxona – bu dam olish va xotirjamlik maskani. Ortiqcha bezaklarsiz, faqat kerakli narsalar bilan to'ldirilgan makon sizga ichki tinchlikni his qilishga yordam beradi. Toza chiziqlar, yorug' ranglar va minimalist mebel – qulaylik va zamonaviylik uyg'unligi.",
      relatedImages: [
        "/1.2.jpg",
        "/1.3.jpg",
        "/1.4.jpg",
        "/1.5.jpg",
      ],
    },
    {
      mainImage: "/2.1.jpg",
      title: "Minimalistik yotoqxonada har kuni uyg'onish",
      description: "O'zingizga berilgan eng yaxshi sovg'a. Tashvishlardan yiroq, tartibli va toza joy — haqiqiy dam olish manzili.",
      relatedImages: [
        "/2.2.jpg",
        "/2.3.jpg",
        "/2.4.jpg",
        "/2.5.jpg",
      ],
    },
    {
      mainImage: "/3.1.jpg",
      title: "Sizning ideal oshxonangiz qanday bo'lishi kerak",
      description: "Tartibli va zamonaviy oshxona — eng yaxshi tanlov. Biz sizga faqat go'zal ko'rinish emas, balki kundalik hayotingizni soddalashtiradigan amaliy yechimlarni taklif qilamiz. Har bir detal sizning qulayligingiz uchun ishlaydi.",
      relatedImages: [
        "/3.2.jpg",
        "/3.3.jpg",
        "/3.4.jpg",
      ],
    },
    {
      mainImage: "/4.1.jpg",
      title: "Kichik joy – katta imkoniyat!",
      description: "Hojatxona dizayni haqida o'ylayotganda, uni oddiygina texnik xona deb o'ylamang. To'g'ri tanlangan ranglar, devor va pol materiallari, chiroqlar va zamonaviy sanitariya jihozlari yordamida bu joyni ham zamonaviy va qulay makonga aylantirish mumkin.",
      relatedImages: [
        "/4.2.jpg",
        "/4.3.jpg",
        "/4.4.jpg",
      ],
    },
    {
      mainImage: "/5.1.jpg",
      title: "Oshxona – uy yuragi!",
      description: "Biz siz orzu qilgan oshxonani yaratamiz: zamonaviy, qulay, chiroyli va har kuni ilhom baxsh etadigan. Oshxonangiz kichik bo'ladimi yoki katta, biz har bir kvadrat metrni to'g'ri tashkil qilishni bilamiz.",
      relatedImages: [
        "/5.2.jpg",
        "/5.3.jpg",
      ],
    },
    {
      mainImage: "/6.1.jpg",
      title: "Klassik uslubdagi eksteryer dizayni",
      description: "Klassik uslub — bu nafislik, uyg'unlik va vaqt sinovidan o'tgan go'zallik uyg'unligidir. Bunday dizaynda har bir detal — ustunlar, karnizlar, simmetriya va muvozanat — uy fasadini hashamatli va obro'li ko'rsatadi.",
      relatedImages: [
        "/6.2.jpg",
        "/6.3.jpg",
        "/6.4.jpg",
      ],
    },
    {
      mainImage: "/7.1.jpg",
      title: "Tashqi ko‘rinish — birinchi taassurot.",
      description: "Uyingiz yoki binongizning tashqi ko‘rinishi siz haqingizda ko‘p narsani aytadi. Biz sizga zamonaviy yoki klassik uslubda, orzuyingizdagi tashqi makon dizaynini yaratamiz. Tabiiy materiallar, puxta muvofiqlashtirilgan ranglar va mukammal tafsilotlar orqali har bir mijozga individual yondashuvni kafolatlaymiz.",
      relatedImages: [
        "/7.2.jpg",
        "/7.3.jpg",
        "/7.4.jpg",
      ],

    },
    {
      mainImage: "/8.1.jpg",
      title: "Hashamatdan yiroq",
      description: "Agar siz hashamatdan yiroq, ammo chiroyli va zamonaviy eksteryer istasangiz — bu uslub aynan siz uchun. Uyingizga sokinlik, zamonaviylik va estetik muvozanat olib kiradi.",
      relatedImages: [
        "/8.2.jpg",
        "/8.3.jpg",
      ],
    },
    {
      mainImage: "/9.1.jpg",
      title: "Zamonaviy, oson tozalanadigan va qulay sanuzel",
      description: "Agar siz zamonaviy, oson tozalanadigan va qulay sanuzel yaratmoqchi bo‘lsangiz — bizning dizayn variantlarimiz aynan shunday talablarni qondiradi.",
      relatedImages: [
        "/9.2.jpg",
        "/9.3.jpg",
        "/9.4.jpg",
        "/9.5.jpg",
        "/9.6.jpg",
      ],
    },
    {
      mainImage: "/10.1.jpg",
      title: "Oddiy, ammo estetik jihatdan nafis",
      description: "Agar siz oddiy, ammo estetik jihatdan nafis va tinchlantiruvchi yotoqxona yaratmoqchi bo‘lsangiz, minimalizm uslubi aynan siz uchun!",
      relatedImages: [
        "/10.2.jpg",
        "/10.3.jpg",
        "/10.4.jpg",
        "/10.5.jpg",
      ],
    },

  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl">
      <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.85) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

        

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }

          .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
          }

          .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
            background-color: #4b5563;
            border-radius: 4px;
          }

          .scrollbar-track-gray-800::-webkit-scrollbar-track {
            background-color: #1f2937;
          }
        `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" style={{ animation: "fadeInUp 0.8s ease-out" }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-float">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 animate-glow">
              Galereya ko'rgazmasi
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Har bir kartada ko'plab rasmlar mavjud — ustiga bosing va to'liq ko'ring!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((data, idx) => (
            <GalleryCard key={idx} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;