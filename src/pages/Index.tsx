
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Facts from '@/components/Facts';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Филин - Величественная ночная птица';
    
    // Initialize animation observer
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header />
      <main>
        <About />
        <Gallery />
        <Facts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
