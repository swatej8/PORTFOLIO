import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2020", title: "Started Designing", desc: "Began the journey exploring Photoshop and Illustrator." },
  { year: "2021", title: "Social Media Projects", desc: "Helped local brands establish their online presence." },
  { year: "2022", title: "Branding Work", desc: "Shifted focus to complete brand identities and logos." },
  { year: "2023", title: "3D & AI Visuals", desc: "Integrated Blender, C4D, and AI into the workflow." },
  { year: "2024", title: "Professional Designer", desc: "Working with global clients delivering premium assets." },
];

const Journey = () => {
  return (
    <section id="journey" className="py-32 bg-white text-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-heading font-black text-dark mb-20"
        >
          MY <span className="text-primary">JOURNEY.</span>
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-hover:bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10"></div>
              
              {/* Content Box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-dark font-heading">{item.title}</h3>
                  <span className="text-primary font-black font-heading text-lg">{item.year}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
