'use client'

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const smoothScroll = (targetId: string) => {
      const target = document.getElementById(targetId);

      if (target) {
        const offset = 75; // Adjust this value as needed
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
        e.preventDefault();
        const targetId = (e.target as HTMLElement)?.getAttribute('href')?.substring(1); // Typecast to HTMLElement
        if (targetId) {
          smoothScroll(targetId);
        }
      });
    });
  }, []);

  return (
    <div className="fixed top-0 w-full backdrop-blur-lg">
      <ul className="flex justify-evenly p-4 navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#logos">Logos</a></li>
        <li><a href="#colours">Colours</a></li>
        <li><a href="#typography">Typography</a></li>
        <li><a href="#graphics">Graphics/Icons</a></li>
        <li><a href="#photography">Photography</a></li>
      </ul>
    </div>
  );
}
