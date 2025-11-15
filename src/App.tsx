import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ScrollToTop from "@/components/ScrollToTop";
import Header from './components/Header';



export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
   <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      <Header />

  

      {/* Main content */}
      <div className="md:ml-[60px] min-h-screen pt-16 md:pt-0 relative z-10">
        <ScrollToTop />

        <div className="flex flex-col items-center p-4">
          <div className="w-full max-w-6xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
