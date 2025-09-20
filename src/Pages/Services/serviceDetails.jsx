import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../Component/button'
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
  const location = useLocation();
  const { image, title, description, link, id } = location.state || {};

  return (
    <main className="p-10 justify-center min-h-[90vh] ">
        <section className='h-[80vh] flex w-full '>
            <div className="left w-1/2 h-full bg-blue-200 object-cover">
                <img src={image} alt="" className='w-full h-full '/>
            </div>
            <div className="right w-1/2 h-full flex gap-10 flex-col p-10 ">
            <h1 className='text-[6rem] font-[Antonio] leading-[6rem] text-black'>
            {title}
            </h1>
            <p className='text-[1.4rem] text-zinc-600'>
            {description}
            </p>
            <div className="btn">
             <button className="  !font-bold !p-2 !rounded-md  ">
            <Link style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} href="https://vayuroboticss.vercel.app/brochures/sample-brochure.pdf"
  download
  target="_blank"
  rel="noopener noreferrer" className=" overflow-hidden relative group group-hover:text-black  hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2  !text-lg bg-black !font-bold !px-4 !py-4  !rounded-md   !w-fit !h-fit">

              <h1 className="z-10 !text-white !text-lg !font-normal group-hover:!text-black transition-all duration-300">Download Brochure</h1>
              <div className="absolute z-1 top-0 left-0 w-[110%] h-full bg-white -translate-x-100  group-hover:translate-x-0  transition-all duration-300"></div> 
          </Link>
            </button>
            </div>
            </div>
        </section>
    </main>
  );
};

export default ServiceDetails;