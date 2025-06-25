import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-cyan-400 flex flex-col justify-center items-center space-y-6 text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold"
      >
        I am Abdullah Hassan
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl"
      >
        SOC Analyst
      </motion.h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="rounded-full border-4 border-cyan-400 w-40 h-40 overflow-hidden shadow-xl"
      >
        <img
          src="/projects/abdullah-hero.png"
          alt="Abdullah Hassan"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
