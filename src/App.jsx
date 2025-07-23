import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    const initAnimations = () => {
      if (window.gsap && window.ScrollTrigger) {
        const gsap = window.gsap;
        gsap.registerPlugin(window.ScrollTrigger);
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
          });
        });
        
        // Hero animation
        gsap.from('.hero-title, .hero-subtitle, .hero-btns', {
          duration: 1,
          opacity: 0,
          y: 30,
          stagger: 0.2
        });
        
        // Project card animations
        gsap.utils.toArray('.project-card').forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: i * 0.1
          });
        });
      } else {
        // Retry if GSAP not loaded yet
        setTimeout(initAnimations, 100);
      }
    };

    initAnimations();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navLinks = document.querySelector('.nav-links');
          if (window.getComputedStyle(navLinks).display === 'flex') {
            navLinks.style.display = 'none';
          }
        }
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <SocialSidebar />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;