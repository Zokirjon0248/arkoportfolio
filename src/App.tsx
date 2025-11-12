import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import LightRays from '@/components/LightRays';
import DotGrid from './components/DotGrid';
import ScrollToTop from "@/components/ScrollToTop";
import Header from './components/Header';
export default function App() {
;

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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      <Header />
    

    {/* DotGrid - to'liq orqa fon */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        opacity: 0.4
      }}>
        <DotGrid
          dotSize={8}
          gap={30}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={80}
          shockRadius={150}
          shockStrength={3}
          resistance={500}
          returnDuration={1.2}
        />
      </div>

      {/* Main content - sidebar width hisobiga padding */}
      <div className="md:ml-[60px] min-h-screen pt-16 md:pt-0">
        <ScrollToTop />
        {/* <div
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
        </div> */}

        <div className="relative z-10 flex flex-col items-center p-4">
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