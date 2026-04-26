import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { id: "01", title: "Idea", desc: "Brainstorming and conceptualizing the core vision." },
  { id: "02", title: "Research", desc: "Gathering inspiration, market data, and references." },
  { id: "03", title: "Design", desc: "Crafting the visual assets and user experience." },
  { id: "04", title: "Refinement", desc: "Polishing details, typography, and motion." },
  { id: "05", title: "Delivery", desc: "Final handover of production-ready assets." },
];

const Process = () => {
  const containerRef = useRef(null);

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for a buttery feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="process" className="h-[300vh] bg-white relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden w-full px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-heading font-black text-dark mb-32 text-center tracking-tighter"
        >
          CREATIVE <span className="text-stroke">PROCESS</span>
        </motion.h2>

        <div className="relative w-full max-w-7xl mx-auto py-20">
          {/* Background Line (Gray) */}
          <div className="absolute top-[40px] left-0 right-0 w-full h-1 bg-gray-100 rounded-full z-0"></div>
          
          {/* Progress Line (Primary) - Animated by Scroll */}
          <motion.div 
            className="absolute top-[40px] left-0 w-full h-1 bg-primary rounded-full z-0 origin-left"
            style={{ scaleX }}
          ></motion.div>
          
          <div className="grid grid-cols-5 w-full relative z-10">
            {steps.map((step, index) => {
              // Calculate activation point for each step
              // 0 -> 0.25 -> 0.5 -> 0.75 -> 1.0
              const stepStart = index / (steps.length - 1);
              
              // Use transform to animate the circle as the scroll passes it
              const isActive = useTransform(scrollYProgress, 
                [stepStart - 0.1, stepStart, stepStart + 0.1], 
                [0, 1, 1]
              );
              
              const rotate = useTransform(scrollYProgress,
                [stepStart - 0.1, stepStart, stepStart + 0.1],
                [0, 360, 360]
              );

              const color = useTransform(scrollYProgress,
                [stepStart - 0.1, stepStart],
                ["#e5e7eb", "#FFB800"] // gray-200 to primary
              );

              const textColor = useTransform(scrollYProgress,
                [stepStart - 0.1, stepStart],
                ["#d1d5db", "#000000"] // gray-300 to black
              );

              return (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <motion.div 
                    style={{ 
                      borderColor: color,
                      color: textColor,
                      rotate: rotate,
                    }}
                    className="w-20 h-20 rounded-full bg-white border-4 shadow-xl flex items-center justify-center text-2xl font-black font-heading mb-8 relative transition-shadow duration-300"
                  >
                    {step.id}
                    
                    {/* Active Glow */}
                    <motion.div 
                      style={{ opacity: isActive }}
                      className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,184,0,0.6)]"
                    ></motion.div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    style={{ 
                      opacity: useTransform(scrollYProgress, [stepStart - 0.1, stepStart, stepStart + 0.1], [0.3, 1, 1]),
                      scale: useTransform(scrollYProgress, [stepStart - 0.1, stepStart, stepStart + 0.1], [0.9, 1, 1])
                    }}
                  >
                    <h3 className="text-xl font-bold font-heading text-dark mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 max-w-[150px] mx-auto hidden md:block">{step.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Scroll Instruction */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Scroll to move through process</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-8 rounded-full bg-gray-200 overflow-hidden"
          >
            <motion.div 
              className="w-full h-1/2 bg-primary"
              animate={{ y: [-20, 40] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
