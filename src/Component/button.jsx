import React from 'react'
import { Link } from 'react-router-dom'

const btn = ({name,link,ref}) => {
  return (
    <>
        <main>
             <Link to={link} className='relative group hover:scale-105 transition-all duration-75 hover:-translate-y-1'>
        <button
          ref={ref}
          className="px-3 py-2 hover:scale-105 transition-all duration-75 hover:-translate-y-1 cursor-pointer  bg-[#FFCF14] rounded-lg"
        >
          {name}
        </button>
       
       

   </Link>
        </main>
    </>
)
}

export default btn