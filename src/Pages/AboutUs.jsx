import React from 'react'

const AboutUs = () => {
  return (
    <main className='w-full min-h-[90vh]'>
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h1 className='text-5xl md:text-6xl font-light antonio text-white'>About <span className='text-[#ffcf14]'>VayuTech</span></h1>
        <p className='mt-6 text-lg text-gray-300 max-w-3xl'>
          We deliver professional drone services across industries like construction, power, solar, agriculture, and disaster management. Our mission is to provide reliable, data-driven insights with precision and speed.
        </p>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='rounded-xl bg-[#15161a] p-6 border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
            <h3 className='text-xl text-white mb-2'>Our Vision</h3>
            <p className='text-gray-400'>Aerial intelligence accessible and effective for every business.</p>
          </div>
          <div className='rounded-xl bg-[#15161a] p-6 border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
            <h3 className='text-xl text-white mb-2'>Our Values</h3>
            <p className='text-gray-400'>Safety, quality, transparency, and client success over everything.</p>
          </div>
          <div className='rounded-xl bg-[#15161a] p-6 border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
            <h3 className='text-xl text-white mb-2'>Our Team</h3>
            <p className='text-gray-400'>Experienced pilots, engineers, and analysts delivering end-to-end results.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs


