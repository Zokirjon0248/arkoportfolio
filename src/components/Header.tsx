import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Buyurtma berish", href: "/contact" },
    { name: "Qo'shimcha ma'lumot", href: "/" },
  ];

  return (
    <header className="fixed w-full top-0 z-20">
      {/* Animatsiyali gradient fon */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-md">
        {/* Animated shine effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>

        {/* Qo'shimcha gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-2 z-10">
            <div className="flex items-center gap-2 cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img src={"/logo.png"} alt="Logo" className="w-10 h-10 object-contain" />               <span className="text-white text-xl font-bold">Arx dexium</span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-2 z-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-100 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group overflow-hidden"
              >
                {/* Hover gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm"></span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>

                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>

                <span className="relative z-10">{item.name}</span>

                {/* Bottom line indicator */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-100 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300 backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn relative z-10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md rounded-2xl mt-2 border border-white/10">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative text-gray-100 hover:text-white block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2 group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;