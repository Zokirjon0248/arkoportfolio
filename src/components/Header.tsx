import { useNavigate } from "react-router-dom";

export default function Header({ className = "" }) {
  const navigate = useNavigate();

  return (
    <header className={`text-gray-600  body-font ${className}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-5 flex-wrap gap-4">
        {/* Logo qismi */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <img
            className="object-contain rounded w-10 h-10 sm:w-14 sm:h-14"
            alt="hero"
            src="/logo.png"
          />
          <div className="leading-tight">
            <p className="text-white text-sm sm:text-base font-semibold">
              ARX-DEXIUM
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400">
              Professional Arxitektor
            </p>
          </div>
        </div>

        {/* Tugma qismi */}
        <button
          onClick={() => navigate("/portfolio")}
          className="inline-flex items-center bg-gradient-to-b from-black to-gray-900 border border-gray-800 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm text-white hover:scale-105 transition-all"
        >
          Portfolio
        </button>
      </div>
    </header>
  );
}
