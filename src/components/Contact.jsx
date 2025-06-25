import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-cyan-300 p-4 flex flex-col justify-center items-center">
      <h2 className="text-3xl mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Your Name" className="p-2 rounded bg-gray-800 text-cyan-300"/>
        <input type="email" placeholder="Your Email" className="p-2 rounded bg-gray-800 text-cyan-300"/>
        <textarea placeholder="Your Message" className="p-2 rounded bg-gray-800 text-cyan-300"/>
        <button type="submit" className="p-2 rounded bg-cyan-500 hover:bg-cyan-700 transition">Send</button>
      </form>
    </section>
  );
}