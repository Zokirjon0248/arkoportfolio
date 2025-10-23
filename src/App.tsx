import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import LightRays from '@/components/LightRays';
import { VscHome, VscMail, VscBriefcase } from 'react-icons/vsc';
import ScrollToTop from "@/components/ScrollToTop";
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';

export default function App() {
  const [open, setOpen] = useState(false);

  const sidebarLinks = [
    {
      label: "Home",
      href: "/",
      icon: <VscHome className="text-neutral-200 h-5 w-5" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <VscMail className="text-neutral-200 h-5 w-5" />,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <VscBriefcase className="text-neutral-200 h-5 w-5" />,
    },
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
         
            
            <div className="flex flex-col gap-2">
              {sidebarLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main content - sidebar width hisobiga padding */}
      <div className="md:ml-[60px] min-h-screen pt-16 md:pt-0">
        <ScrollToTop />
        
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