import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import Btn from './button';

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);

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
    <nav className="w-full h-[10vh] bg-white text-black  flex items-center justify-between px-10 py-4">
      <div className="logo w-1/3 h-full flex items-center">
        <div ref={logoRef} className="image w-25 ">
          <img src="/logo.png" className="h-full w-full" alt="" />
        </div>
      </div>
      <div className="container flex justify-between w-1/3">
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
   {/* <Link to="/contactus " className='hover:scale-105 transition-all duration-75 hover:-translate-y-1'>
        <button
          ref={buttonRef}
          className="px-3 py-2 cursor-pointer  bg-[#FFCF14] rounded-lg"
        >
          Contact
        </button>
   </Link> */}
    <Btn ref={buttonRef} name="Contact US" link="/contactus">

    </Btn>
      </div>
    </nav>
  );
};

export default Navbar;