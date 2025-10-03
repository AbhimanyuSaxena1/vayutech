import React, { useState, useRef } from 'react';

const ProductCard = ({ imageSrc, videoSrc, title, top = '0' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    if (!isPlaying) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      } else {
        setIsPlaying(true);
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`
        group relative flex flex-col items-start justify-end
        p-2 sm:p-4 w-full
        h-[40vh] sm:h-[50vh] md:h-[42vh] lg:h-[50vh]
        rounded-lg shadow-md border border-transparent cursor-pointer overflow-hidden
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:scale-105
        max-w-full
        min-h-[240px]
      `}
      style={{ position: 'sticky', top }}
      onMouseEnter={handleTogglePlay}
      onMouseLeave={handleMouseLeave}
      onClick={handleTogglePlay}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 ease-in-out
          group-hover:scale-110 group-hover:brightness-90
          ${isPlaying ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <video
        ref={videoRef}
        src={videoSrc}
        className={`
          absolute z-20 inset-0 w-full h-full object-cover
          transition-opacity duration-500
          ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-50 group-hover:backdrop-blur-sm transition-all duration-500"></div>
      <h1
        className="
          relative z-20 text-white drop-shadow-lg
          text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem]
          font-semibold transition-opacity duration-500 group-hover:opacity-100 opacity-1
          px-4 py-2
        "
      >
        {title}
      </h1>
    </div>
  );
};

// IMPORTANT: Download these videos and place them inside your React public folder (e.g. public/videos/)
const productsData = [
  {
    title: 'Agriculture',
    imageSrc: 'Drone1.png',
    videoSrc: '/videos/record.mp4',
    top: '10%',
  },
  {
    title: 'Construction',
    imageSrc: 'service2.jpg',
    videoSrc: '/videos/record.mp4',
    top: '14%',
  },
  {
    title: 'Disaster Management, Mapping & Survey',
    imageSrc: 'service3.jpg',
    videoSrc: '/videos/record.mp4',
    top: '18%',
  },
  {
    title: 'Consultation & Training',
    imageSrc: 'service1.jpg',
    videoSrc: '/videos/record.mp4',
    top: '22%',
  },
];

const Products = () => {
  return (
    <section
      className="
        w-full relative px-2 py-6 sm:p-6 md:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10
        min-h-[100vh]
      "
    >
      <div className="absolute hidden inset-0 bg-[url('droneBG.jpg')] bg-cover bg-center z-0" />
      <div className="absolute hidden inset-0 bg-gradient-to-r from-[#0b0b0f] via-black/40 to-transparent z-10" />

      <div
        className="
          left
          w-full lg:w-1/2
          flex flex-col items-start justify-center
          p-2 sm:p-6 md:p-10
          h-auto lg:h-[30vw]
          z-20 sticky top-30
          mb-6 lg:mb-0
        "
      >
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-light text-black leading-none">
          Our <span className="text-yellow-300"> Services</span>
        </h1>
        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] font-light text-gray-400 ml-1 md:ml-2 mt-2">
          Explore the services we offer with precision, reliability, and a passion for excellence.
        </p>
      </div>

      <div
        className="
          right z-20
          w-full lg:w-1/2
          p-2 sm:p-6 md:p-10
          gap-6 lg:gap-10
          flex flex-col items-center justify-between
        "
      >
        {productsData.map(({ imageSrc, videoSrc, title, top }, index) => (
          <ProductCard
            key={index}
            imageSrc={imageSrc}
            videoSrc={videoSrc}
            title={title}
            top={top}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
