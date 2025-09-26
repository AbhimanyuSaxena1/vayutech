import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleBurgerClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const logo = logoRef.current;
    const links = linksRef.current;
    const button = buttonRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      logo,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
    tl.fromTo(
      links,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
      '>-0.1'
    );
    tl.fromTo(
      button,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '>-0.05'
    );
  }, []);

  return (
    <div className='w-full text-black relative z-50'>
      {/* NAVBAR DESKTOP/TABLET */}
      <nav className="
        w-full h-[10vh] bg-white text-black shadow-xl flex items-center justify-between
        px-4 sm:px-8 md:px-10 py-3 md:py-4  top-0 left-0 z-50
      ">
        {/* Logo */}
        <div className="logo flex items-center h-full w-1/2 md:w-1/3">
          <div ref={logoRef} className="image w-16 h-12 md:w-24 md:h-16">
            <img src="/logo.png" className="h-full w-full object-contain" alt="Logo" />
          </div>
        </div>

        {/* Links (desktop/tablet only) */}
        <div className="hidden md:flex justify-center w-1/3 space-x-5 lg:space-x-8">
          <Link
            ref={el => (linksRef.current[0] = el)}
            className="hover:text-yellow-400 text-base lg:text-xl hover:scale-110 transition-all duration-200"
            to="/"
          >Home</Link>
          <Link
            ref={el => (linksRef.current[1] = el)}
            className="hover:text-yellow-400 text-base lg:text-xl hover:scale-110 transition-all duration-200"
            to="/services"
          >Services</Link>
          <Link
            ref={el => (linksRef.current[2] = el)}
            className="hover:text-yellow-400 text-base lg:text-xl hover:scale-110 transition-all duration-200"
            to="/about"
          >About Us</Link>
          {/* <Link
            ref={el => (linksRef.current[3] = el)}
            className="hover:text-yellow-400 text-base lg:text-xl hover:scale-110 transition-all duration-200"
            to="/contactus"
          >Contact</Link> */}
        </div>

        {/* Contact Button (desktop/tablet only) */}
        <div className="hidden md:flex items-center justify-end w-1/3">
          <Link to="/contactus" className='hover:scale-105 transition-all duration-75 hover:-translate-y-1'>
            <button
              ref={buttonRef}
              className="px-3 py-2 bg-[#FFCF14] text-black rounded-lg focus:outline-none"
            >
              Contact
            </button>
          </Link>
        </div>

        {/* Burger menu button (mobile only) */}
        <div className="md:hidden flex items-center justify-end w-1/2">
          <button
            className="text-black hover:text-yellow-400 focus:outline-none"
            onClick={handleBurgerClick}
            aria-label="Open main menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-lg
          z-40 flex flex-col items-center justify-center md:hidden
          transform transition-transform duration-300 ease-in-out
          ${showMobileMenu ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={handleBurgerClick}
          className="absolute top-5 right-6 text-white text-4xl md:text-6xl focus:outline-none"
          aria-label="Close main menu"
        >&times;</button>
        <ul className="flex flex-col space-y-8 text-center mt-10">
          <li>
            <Link to="/" className="text-white text-2xl font-light" onClick={handleBurgerClick}>Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-white text-2xl font-light" onClick={handleBurgerClick}>Services</Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-2xl font-light" onClick={handleBurgerClick}>About Us</Link>
          </li>
          {/* <li>
            <Link to="/contactus" className="text-white text-2xl font-light" onClick={handleBurgerClick}>Contact</Link>
          </li> */}
        </ul>
        <Link to="/contactus" onClick={handleBurgerClick} className="mt-10">
          <button className="bg-[#FFCF14] text-black px-8 py-3 rounded-lg text-lg font-semibold mt-3 shadow-md">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
