import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ScrollToTop from "@/components/ScrollToTop";
import Header from './components/Header';
import DarkVeil from './components/DarkVeil';


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background veil - to'liq ekran orqa fon */}
      <div className="fixed inset-0 z-0 mt-10">
        <DarkVeil />
      </div>
 
      {/* Header */}
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