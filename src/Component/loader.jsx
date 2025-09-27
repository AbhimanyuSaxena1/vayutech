import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '/logo.png';

const Loader = () => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const logo = logoRef.current;

    const timeline = gsap.timeline({
      onComplete: () => {
        // Optional: Add any cleanup or state change logic here
      },
    });

    timeline
     
       .to(
        logo,
        {
          top:"50%", // Start from the right bottom
          left: '50%',
          translateX:'-50%',
          translateY:'-50%',
          scale: 1,
        },
      )
      .to(logo, {
        scale: 2, // Scale up
        duration: .5,
        ease: 'power2.inOut',
      })
      .to(logo, {
        scale: 1, // Scale down
        duration: 1,
        ease: 'power2.inOut',
      })
      // .to(logo, {
      //   top: '5%', // Move to the top left corner (adjust as needed)
      //   left: '5.9%',
        
      //   duration: 1,
      //   ease: 'power2.inOut',
      // })
      .to([ loader], {
        opacity: 0,
        duration: 1,
        transition: 'all',
        ease: 'power2.inOut',

      });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center bg-white justify-center "
    >
      <img
        ref={logoRef}
        src={logo}
        alt="Logo"
        className="absolute w-25" // Adjust size as needed
      />
    </div>
  );
};

export default Loader;