import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../Component/button'
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiCircleChevDown } from "react-icons/ci";

import { FaArrowDown } from "react-icons/fa6";

const ServiceDetails = () => {
  const location = useLocation();
  const { image, title, description, link, id } = location.state || {};

  return (
    <main className=" lg:p-10 md:w-full w-[100vw] overflow-hidden justify-center min-h-[90vh] ">
        <section className='h-[80vh] p-4 flex flex-col md:flex-row md:w-full w-[100vw] '>
            <div className="left w-full lg:w-1/2 h-full bg-blue-200 object-cover">
                <img src={image} alt="" className='w-full h-full '/>
            </div>
            <div className="right w-full   lg:w-1/2 h-full flex  gap-5 lg:gap-10 flex-col lg:p-10 ">
            <h1 className='text-[4rem] lg:text-[6rem] font-[Antonio] leading-[6rem] text-black'>
            {title}
            </h1>
            <p className='text-[1.4rem] text-zinc-600'>
            {description}
            </p>
            <div className="btn w-full flex items-center justify-start">
            <button className="  !font-bold !p-2 !rounded-md  ">
            <a style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} href="https://vayuroboticss.vercel.app/brochures/sample-brochure.pdf"
  download
  target="_blank"
  rel="noopener noreferrer" className=" overflow-hidden relative group group-hover:text-black  hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2  !text-lg bg-black !font-bold !px-4 !py-4  !rounded-md   !w-fit !h-fit">

              <h1 className="z-10 !text-white !text-lg !font-normal group-hover:!text-black transition-all duration-300">Download Brochure</h1>
<CiCircleChevDown className='rotate-[-90deg] z-2 text-2xl text-white group-hover:rotate-[0deg] group-hover:scale-110 transition-all duration-200 group-hover:text-black' />

              <div className="absolute z-1 top-0 left-0 w-[110%] h-full bg-white -translate-x-100   group-hover:translate-x-0  transition-all duration-800"></div> 
          </a>
            </button>
            </div>
            </div>
        </section>
    </main>
  );
};

export default ServiceDetails;