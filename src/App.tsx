import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import LightRays from '@/components/LightRays';
import Dock from '@/components/Dock';
import { VscHome, VscMail, VscBriefcase } from 'react-icons/vsc';
import Header from './components/Header';
import ScrollToTop  from "@/components/ScrollToTop"



export default function App() {
  const navigate = useNavigate();

  const items = [
    { icon: <VscHome color="#fff" size={18} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscMail color="#fff" size={18} />, label: 'Contact', onClick: () => navigate('/contact') },
    { icon: <VscBriefcase color="#fff" size={18} />, label: 'Portfolio', onClick: () => navigate('/portfolio') },
  ];

  const [rayLength, setRayLength] = useState(1.2);

  useEffect(() => {
    function updateRayLength() {
      if (window.innerWidth < 640) {
        setRayLength(3.0); 
      } else if (window.innerWidth < 1024) {
        setRayLength(2); 
      } else {
        setRayLength(1.2); 
      }
    }

    updateRayLength();
    window.addEventListener('resize', updateRayLength);
    return () => window.removeEventListener('resize', updateRayLength);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background light effects */}
      <ScrollToTop />
      <Header className="relative z-20" />
      <div
        style={{
          width: '100%',
          height: 600,
          position: 'fixed',
          background: 'black',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#fff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={rayLength}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center p-4">
        <div className="w-full max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>

      {/* Dock — always fixed at the bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
}
