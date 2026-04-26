import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Skills = () => {
  const containerRef = useRef(null);

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create smooth, floating parallax speeds for different icons
  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "-150vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "-220vh"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0vh", "-120vh"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0vh", "-180vh"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["0vh", "-250vh"]);

  // Rotation transforms to make them spin slightly as they float
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const r2 = useTransform(scrollYProgress, [0, 1], [-15, -60]);
  const r3 = useTransform(scrollYProgress, [0, 1], [10, -20]);

  // Adobe/Figma style Logos data
  const logos = [
    { name: 'Ps', color: '#31A8FF', label: 'Photoshop', y: y1, rotate: r1, left: '10%', scale: 1.2, top: '110vh' },
    { name: 'Ai', color: '#FF9A00', label: 'Illustrator', y: y2, rotate: r2, left: '30%', scale: 0.9, top: '130vh' },
    { name: 'Ae', color: '#9999FF', label: 'After Effects', y: y3, rotate: r3, left: '70%', scale: 1.1, top: '105vh' },
    { name: 'Fg', color: '#F24E1E', label: 'Figma', y: y4, rotate: r1, left: '85%', scale: 1.3, top: '140vh' },
    { name: 'Id', color: '#FF3366', label: 'InDesign', y: y2, rotate: r2, left: '45%', scale: 0.8, top: '160vh' },
    { name: 'Pr', color: '#EA77FF', label: 'Premiere', y: y5, rotate: r3, left: '60%', scale: 1, top: '120vh' },
    { name: 'Xd', color: '#FF61F6', label: 'Adobe XD', y: y1, rotate: r1, left: '20%', scale: 1.1, top: '180vh' },
  ];

  return (
    <section ref={containerRef} id="skills" className="h-[300vh] relative bg-white text-dark w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden w-full">
        
        {/* Background Grid for depth */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Central Quote */}
        <div className="relative z-10 text-center max-w-5xl px-6 pointer-events-none mix-blend-multiply">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-heading font-black text-dark tracking-tighter leading-[0.9]"
          >
            "DESIGN IS THE SILENT AMBASSADOR OF YOUR BRAND."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-2xl font-bold text-gray-400 uppercase tracking-[0.3em]"
          >
            - Paul Rand
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 text-sm font-bold text-primary uppercase tracking-widest animate-pulse"
          >
            Scroll to explore tools ↓
          </motion.div>
        </div>

        {/* Animated Logos Parallax Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              style={{ 
                y: logo.y, 
                left: logo.left, 
                rotate: logo.rotate,
                top: logo.top
              }}
              className="absolute"
            >
              <div 
                className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center font-heading font-black text-4xl text-white shadow-2xl transition-all duration-300 pointer-events-auto cursor-pointer hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]"
                style={{ 
                  backgroundColor: logo.color, 
                  transform: `scale(${logo.scale})`,
                  boxShadow: `0 20px 40px -10px ${logo.color}80` 
                }}
                title={logo.label}
              >
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
