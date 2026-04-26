import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-black text-dark mb-6 leading-tight"
            >
              LET'S CREATE SOMETHING <br/>
              <span className="text-stroke">ICONIC.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              Ready to elevate your brand's visual identity? Drop me a message and let's turn your vision into reality.
            </motion.p>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 flex flex-col"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-wide">Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-wide">Email</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-wide">Project Type</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                <option>Branding</option>
                <option>Social Media</option>
                <option>3D Visuals</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-wide">Message</label>
              <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="button" className="w-full bg-dark text-primary font-bold text-lg py-4 rounded-xl hover:bg-black hover:scale-[1.02] transition-all active:scale-95">
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
