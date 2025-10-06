import { useNavigate } from 'react-router-dom';

export default function Header({ className = "" }) {
  const navigate = useNavigate();

  return (
    <header className={`text-gray-600 body-font ${className}`}>
      <div className="container mx-auto flex justify-between items-center p-5 flex-row flex-wrap">
        {/* Logo qismi */}
        <div className="flex items-center space-x-3">
          <img
            className="object-contain rounded w-14 h-14"
            alt="hero"
            src="/logo.png"
          />
          <div>
            <p className="text-white font-semibold">ARX-DEXIUM</p>
            <p className="text-[12px] text-gray-400">Professional Arxitektor</p>
          </div>
        </div>

        {/* Tugma qismi */}
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center bg-gradient-to-b from-black to-gray-900 border border-gray-800 py-2 px-4 rounded-xl text-white hover:scale-105 transition-transform"
        >
          Portfolio
        </button>
      </div>
    </header>
  );
}
