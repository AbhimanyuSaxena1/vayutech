import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import Products from '../Component/Home/products.jsx'
import ImageCorausel from '../Component/swiper/ImageCorausel.jsx'
import Counter from '../Component/Counter.jsx'
const Home = () => {
  return (
    <main className='w-full  '>
        <ImageCorausel/>
        <Products/>
        <Counter/>
    </main>
  )
}

export default Home