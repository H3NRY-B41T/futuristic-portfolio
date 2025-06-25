import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-black text-cyan-300 flex flex-col justify-center items-center p-4">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <img src="/your-image-placeholder.png" alt="Your face" className="w-32 h-32 rounded-full mx-auto mb-4"/>
        <p className="text-center">I am a passionate SOC Analyst with expertise in threat detection, incident response, and security engineering.</p>
      </motion.div>
    </section>
  );
}