import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Neon Cyber Brand", category: "Branding", color: "from-purple-500 to-blue-500", size: "col-span-2 row-span-2" },
  { title: "Sneaker Social Kit", category: "Social Media", color: "from-orange-500 to-red-500", size: "col-span-1 row-span-1" },
  { title: "Fintech Pitch Deck", category: "Presentations", color: "from-green-400 to-emerald-600", size: "col-span-1 row-span-2" },
  { title: "AI Concept Art", category: "AI Designs", color: "from-pink-500 to-rose-500", size: "col-span-1 row-span-1" },
  { title: "Web3 3D Assets", category: "3D Visuals", color: "from-primary to-yellow-600", size: "col-span-2 row-span-1" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white text-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black text-dark"
          >
            SELECTED <br/>
            <span className="text-primary">WORKS.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 max-w-sm text-right">
              A curated collection of my best visual creations, pushing the boundaries of modern design.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 0.98,
                rotateX: 2,
                rotateY: -2
              }}
              style={{ perspective: 1000 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${project.size}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Abstract 3D shape placeholder since we don't have images */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
                <div className="w-3/4 h-3/4 border-4 border-white rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-sm font-bold tracking-widest uppercase text-white/70 mb-2 border border-white/30 self-start px-3 py-1 rounded-full backdrop-blur-md">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-dark transition-all uppercase tracking-wide">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
