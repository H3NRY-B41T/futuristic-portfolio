import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen bg-black text-cyan-300 p-8 flex flex-col items-center justify-center">
      <img
        src="/projects/abdullah-hero.pmg"
        alt="Abdullah Hassan"
        className="w-40 h-40 rounded-full shadow-lg mb-4 object-cover border-4 border-cyan-400"
      />
      <h2 className="text-3xl font-bold mb-2">Abdullah Hassan</h2>
      <p className="text-center max-w-xl">
        I’m a passionate SOC Analyst and cybersecurity learner. I work with Wazuh, Splunk, Suricata,
        and build real-world simulations for threat detection and defense.
      </p>
    </section>
  );
}

