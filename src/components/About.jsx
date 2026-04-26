import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../about page.png';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white text-dark">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Profile Image Representation */}
        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-white border border-gray-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 blur-xl"></div>
          
          <motion.img 
            src={profileImg} 
            alt="Swatej"
            animate={{ 
              y: [-10, 10, -10],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 h-full w-full object-cover object-center drop-shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-heading font-black mb-8"
          >
            I DESIGN <br/>
            <span className="text-stroke">THE FUTURE.</span>
          </motion.h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              I am a visionary graphic designer specializing in crafting premium visual experiences. From striking brand identities to immersive 3D motion pieces, I bridge the gap between imagination and reality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              My approach isn't just about making things look good; it's about engineering a visual language that speaks directly to the audience, utilizing tools like AI, 3D, and dynamic layouts to break conventional boundaries.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex gap-4"
          >
            <div className="py-3 px-6 bg-primary text-dark font-bold rounded-full cursor-pointer hover:scale-105 transition-transform">
              My Journey
            </div>
            <div className="py-3 px-6 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
              Download CV
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
