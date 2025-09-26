import React, { useState, useRef } from 'react';

const ProductCard = ({ imageSrc, videoSrc, title }) => {
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
      className="group flex flex-col relative items-start p-4 justify-end w-full h-[50vh] rounded-lg shadow-md border border-transparent cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl  transform hover:scale-105"
      onMouseEnter={handleTogglePlay}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        src={'/videos/record.mp4'}
        className={`absolute z-20 z-20 inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/20 bg-opacity-30 group-hover:bg-opacity-50 group-hover:backdrop-blur-sm transition-all duration-500"></div>
      <h1 className="relative z-20 text-white drop-shadow-lg text-[3rem] transition-opacity duration-500 ease-in-out group-hover:opacity-100 opacity-1">
        {title}
      </h1>
    </div>
  );
};

// IMPORTANT: Download these videos and place them inside your React public folder (e.g. public/videos/)
const productsData = [
  {
    title: 'Agriculture',
    imageSrc:
      'service1.jpg',
    videoSrc: '/videos/agriculture.mp4' ,
  },
  {
    title: 'Construction',
    imageSrc:
      'service2.jpg',
    videoSrc: '/videos/agriculture.mp4' ,
  },
  {
    title: 'Disaster Management, Mapping & Survey',
    imageSrc:
      'service3.jpg',
    videoSrc :'/videos/agriculture.mp4' ,
  },
  {
    title: 'Consultation & Training',
    imageSrc:
      'service1.jpg',
    videoSrc: '/videos/agriculture.mp4' ,
  },
];

const Products = () => {
  return (
    <section className="w-full relative  md:p-10  md:flex flex-col md:flex-row  md:gap-10  min-h-[270vh]  md:min-h-[100vh]">
      <div
        className="absolute  inset-0 bg-[url('droneBG.jpg')] bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-black/10 blur-sm to-white/0 z-10" />

      <div className="left p-6 w-full md:w-1/2 flex flex-col items-start justify-center mt-20 md:p-10 h-[30vw] z-20 absolute top-20 md:sticky  md:top-35">
        <h1 className="text-[5.5rem] md:text-[6.5rem] font-light text-black">
          Our <span className="text-yellow-300"> Services</span>
        </h1>
        <p className="text-[1.5rem] font-light text-black/40 ml-2">
          Explore the services we offer with precision, reliability, and a passion
          for excellence.
        </p>
      </div>

      <div className="right z-20 w-full absolute md:relative top-100 md:top-0 md:w-1/2 p-10 gap-10  flex flex-col items-center justify-between">
        {productsData.map(({ imageSrc, videoSrc, title }, index) => (
          <ProductCard
            key={index}
            imageSrc={imageSrc}
            videoSrc={videoSrc}
            title={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
