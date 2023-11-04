'use client'

import { useEffect } from 'react';

export default function Navbar() {

  // Add url fragment to the end of the url
  // window.location.hash = '#home'; maybe
  
  useEffect(() => {
    const smoothScroll = (targetId: string) => {
      const target = document.getElementById(targetId);

      if (target) {
        const offset = 25; // Adjust for distance from top of viewport
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    };

    // Add click event listener to all anchor links in the navbar
    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = (e.target as HTMLElement)?.getAttribute('href')?.substring(1); // Typecast to HTMLElement

        // If the link is not "Home", apply smooth scrolling.
        if (targetId && targetId !== "home") {
          e.preventDefault();
          smoothScroll(targetId);
        } else if (targetId && targetId === "home") {
          e.preventDefault();
          // If the link is "Home", scroll to the top of the page.
          window.scrollTo({
            top: 20,
            behavior: 'smooth',
          });
        }
      });
    });
  }, []); 

  return (
    <div className="fixed z-10 top-0 w-full backdrop-blur-lg">
      <ul className="flex justify-evenly p-4 navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#logos">Logos</a></li>
        <li><a href="#colours">Colours</a></li>
        <li><a href="#typography">Typography</a></li>
        <li><a href="#grid">Layout</a></li>
        <li><a href="#graphics">Iconography</a></li>
        <li><a href="#photography">Photography</a></li>
      </ul>
    </div>
  );
}