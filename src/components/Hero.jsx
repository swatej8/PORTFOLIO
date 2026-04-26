import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('.hero-char', {
        yPercent: 15,
        rotationZ: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 hero-bg z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Title Background Box */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] h-40 bg-primary rounded-[3rem] -z-10"
        ></motion.div>

        {/* Title */}
        <motion.h1 
          ref={textRef}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[12vw] md:text-[10rem] font-heading font-black leading-none text-dark tracking-tighter mix-blend-overlay text-center"
        >
          PORTFOLIO
        </motion.h1>

        {/* Floating Badges */}
        <div className="absolute w-full h-full inset-0 pointer-events-none">
          {[
            { text: 'Creative Visuals', top: '20%', left: '10%', delay: 0.5 },
            { text: 'Brand Identity', top: '70%', left: '15%', delay: 0.7 },
            { text: 'Social Media Designs', top: '30%', right: '10%', delay: 0.6 },
            { text: '3D Motion Portfolio', top: '65%', right: '12%', delay: 0.8 },
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: badge.left ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: badge.delay, duration: 0.8 }}
              className="absolute bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl text-sm font-bold border border-gray-100"
              style={{ top: badge.top, left: badge.left, right: badge.right }}
            >
              {badge.text}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-300 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-primary absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
