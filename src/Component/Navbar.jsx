import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useState } from 'react';
const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
 const [showForm, setShowform] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleBurgerClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  useEffect(() => {
    const logo = logoRef.current;
    const links = linksRef.current;
    const button = buttonRef.current;

    const tl = gsap.timeline();

    // Logo animation
    // tl.to(logo, {
    //   opacity: 1,
    //   duration: 0.01,
    //   delay: 0, // Delay to sync with loader
    // });

    // Stagger animation for links and button
    tl.fromTo(
      [...links, button],
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className='w-full '>
    <nav className="w-full h-[10vh] bg-white text-black  flex items-center justify-between px-10 py-4">
      <div className="logo w-1/3 h-full flex items-center">
        <div ref={logoRef} className="image w-25 ">
          <img src="/logo.png" className="h-full w-full" alt="" />
        </div>
      </div>
      <div className="container  hidden md:flex justify-between w-1/3">
        <Link
          ref={(el) => (linksRef.current[0] = el)}
          className="hover:text-[rgb(241,197,37)] text-xl  hover:scale-110 transition-all duration-200"
          to="/services"
        >
          Services
        </Link>
        <Link
          ref={(el) => (linksRef.current[1] = el)}
          className="hover:text-[rgb(241,197,37)] text-xl  hover:scale-110 transition-all duration-200"
          to="/"
        >
          Home
        </Link>
        <Link
          ref={(el) => (linksRef.current[2] = el)}
          className="hover:text-[rgb(241,197,37)] text-xl  hover:scale-110 transition-all duration-200"
          to=""
        >
          Company
        </Link>
        <Link
          ref={(el) => (linksRef.current[3] = el)}
          className="hover:text-[rgb(241,197,37)] text-xl  hover:scale-110 transition-all duration-200"
          to=""
        >
          Home
        </Link>
      </div>
      <div className="contact  w-1/3 h-full flex items-center justify-end">
   <Link to="/contactus " className='hidden md:block hover:scale-105 transition-all duration-75 hover:-translate-y-1'>
        <button
          ref={buttonRef}
          className="px-3 py-2 cursor-pointer  bg-[#FFCF14] rounded-lg"
        >
          Contact
        </button>
   </Link>
    <div className="md:hidden">
          <button className="text-black hover:text-blue-300 focus:outline-none" onClick={handleBurgerClick}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
      <div className={`absolute left-0 w-full   h-full inset-0  bg-black/40 backdrop-blur-sm bg-opacity-80 z-50 flex flex-col items-center justify-center transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} md:hidden`} style={{ pointerEvents: showMobileMenu ? 'auto' : 'none' }}>
          <button onClick={handleBurgerClick} className="absolute top-6 right-6 text-white text-6xl focus:outline-none">&times;</button>
          <ul className="flex flex-col font-[roboto] space-y-8 text-center">
            <li>
              <Link  to="/" className="text-white text-3xl" onClick={handleBurgerClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-3xl" onClick={handleBurgerClick}>About</Link>
            </li>
            <li>
              <Link to="/participate" className="text-white text-3xl" onClick={handleBurgerClick}>Participate</Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white text-3xl" onClick={handleBurgerClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;