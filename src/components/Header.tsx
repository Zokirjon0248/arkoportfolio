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
    <header className="bg-gradient-to-r from-black to-gray-800 backdrop-blur-sm shadow-lg fixed w-full top-0 z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img
                src={"/logo.png"}
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white text-xl font-bold">Arx dexium</span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-200 hover:text-black hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5"></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-200 hover:text-black hover:bg-blue-50 focus:outline-none transition-all duration-300"
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
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-200 hover:text-black hover:bg-blue-50 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;