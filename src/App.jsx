import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Loader.css';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="scroll-smooth">
          <Navbar />
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="certifications"><Certifications /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </div>
      )}
    </>
  );
}

export default App;