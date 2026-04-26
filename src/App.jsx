import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ImageSequence from './components/ImageSequence';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    // Only initialize Lenis if we are on a scrollable page
    if (activeTab === 'Home') return;

    const lenis = new Lenis({
      lerp: 0.05, // Lower value = smoother, more floating feel
      wheelMultiplier: 0.7, // Slows down the mouse wheel slightly for cinematic feel
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [activeTab]);

  return (
    <div className="font-sans text-dark bg-white antialiased selection:bg-primary selection:text-dark min-h-screen relative">
      {/* Global Background Textures */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'Home' && (
        <div className="relative">
          <ImageSequence 
            frameCount={192} 
            folderPath="/" 
            filenamePrefix="ezgif-frame-" 
            filenameExtension=".jpg"
            padLength={3} 
            autoPlay={false} // Use ScrollTrigger
          />
        </div>
      )}

      {activeTab === 'About' && <About />}
      {activeTab === 'Skills' && <Skills />}
      {activeTab === 'Services' && <Services />}
      {activeTab === 'Portfolio' && <Portfolio />}
      {activeTab === 'Process' && <Process />}
      {activeTab === 'Contact' && <Contact />}

      {activeTab !== 'Home' && (
        <footer className="bg-white text-dark py-8 text-center border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Swatej. All rights reserved. Designed with passion.
          </p>
        </footer>
      )}
      </div>
    </div>
  );
}

export default App;
