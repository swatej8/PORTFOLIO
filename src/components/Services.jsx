import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  { title: "Social Media Design", icon: "📱", delay: 0.1 },
  { title: "Brand Identity", icon: "✨", delay: 0.2 },
  { title: "Poster Design", icon: "🖼️", delay: 0.3 },
  { title: "Presentation Design", icon: "📊", delay: 0.4 },
  { title: "Website Visuals", icon: "💻", delay: 0.5 },
  { title: "AI Prompt Design", icon: "🤖", delay: 0.6 },
  { title: "Motion Graphics", icon: "🎬", delay: 0.7 },
  { title: "3D Portfolio Design", icon: "🧊", delay: 0.8 },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black text-dark mb-4">
            WHAT I <span className="text-stroke">DO</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Delivering premium visual solutions tailored to elevate brands in the digital space.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(255,184,0,0.3)" 
              }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-3 font-heading group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                Crafting visually stunning {service.title.toLowerCase()} that captivates and converts your target audience.
              </p>
              
              <div className="mt-6 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-dark transition-all">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
