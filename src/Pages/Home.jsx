import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import ImageCorausel from '../Component/swiper/ImageCorausel.jsx'
const Home = () => {
  return (
    <main className='w-full min-h-screen '>
        <Navbar/>
        <ImageCorausel/>
    </main>
  )
}

export default Home