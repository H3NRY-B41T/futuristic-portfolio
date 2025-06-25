import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-cyan-400">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl md:text-6xl font-bold"
      >
        I am Abdullah Hassan
      </motion.h1>
      <motion.h2
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-3xl mt-4 text-cyan-300"
      >
        SOC Analyst
      </motion.h2>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="w-32 h-32 border-4 border-cyan-500 rounded-full mt-8"
      ></motion.div>
    </section>
  );
}