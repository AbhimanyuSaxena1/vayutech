import React from 'react'
import { Link } from 'react-router-dom';

const serviceCard = ({image, title, description, link, id, videoSrc}) => {
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef(null);

    
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    const handleMouseEnter = () => {
        const el = videoRef.current;
        if (!el) return;
        const attemptPlay = el.play();
        if (attemptPlay && typeof attemptPlay.then === 'function') {
            attemptPlay.then(() => setIsPlaying(true)).catch(() => {});
        } else {
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        const el = videoRef.current;
        if (el) {
            el.pause();
        }
        setIsPlaying(false);
        setTilt({ x: 0, y: 0 });
    };

    return (
    <Link to={`/services/${id}`}
    state={{ image, title, description, link, id }}>
        <div
            className="group rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer w-full max-w-[22rem] bg-[#15161a] hover:shadow-2xl hover:-translate-y-1"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <div className="relative w-full h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                />
                <video
                    ref={videoRef}
                    src={videoSrc || '/videos/record.mp4'}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                <h3 className="absolute bottom-3 left-4 z-10 text-lg font-semibold text-white drop-shadow-md transition-opacity duration-500 opacity-100 group-hover:opacity-100">
                    {title}
                </h3>
            </div>
            <p className="text-sm px-4 py-4 text-gray-400">
                {description}
            </p>
        </div>

    </Link>
    );
};
export default serviceCard