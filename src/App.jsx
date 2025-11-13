import React, { useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Ensure DOM elements are available
    setTimeout(() => {
      // Animate sections on scroll
      gsap.utils.toArray('section').forEach(section => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
      
      // Hero animation
      gsap.fromTo('.hero-title, .hero-subtitle, .hero-btns', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2
        }
      );
      
      // Project card animations
      gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%'
            }
          }
        );
      });
      
      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 300);
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navLinks = document.querySelector('.nav-links');
          if (navLinks && window.getComputedStyle(navLinks).display === 'flex') {
            navLinks.style.display = 'none';
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <BrowserRouter>
      <div className="App" ref={appRef}>
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
