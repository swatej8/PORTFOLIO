import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Alex R.", role: "CEO, TechFlow", text: "Swatej completely transformed our brand identity. The 3D elements and modern typography gave us the premium look we desperately needed." },
  { name: "Sarah L.", role: "Marketing Director", text: "The social media kits are incredible. Engagement is up 40% since we launched the new visual language. Highly recommend his creative vision." },
  { name: "Michael T.", role: "Founder, NeoBrand", text: "Working with Swatej was seamless. The attention to detail and futuristic aesthetic perfectly captured our company's ethos." }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black text-dark mb-4">
            CLIENT <span className="text-stroke">LOVE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative"
            >
              <div className="text-primary text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="text-gray-600 mb-8 relative z-10 italic">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dark"></div>
                <div>
                  <h4 className="font-bold text-dark font-heading">{test.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
