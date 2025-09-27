import React from 'react'

const AboutUs = () => {
  return (
    <main className='w-full min-h-[90vh]'>
      {/* Hero Section */}
      <section className='relative w-full h-[60vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-[url("droneBG.jpg")] bg-cover bg-center'></div>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10 text-center px-6'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-light antonio text-white mb-6'>
            About <span className='text-[#ffcf14]'>Vaayu Robotics</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
            Pioneering the future of drone technology with precision, innovation, and excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-light antonio text-white mb-6'>
                Our Story
              </h2>
              <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                Vaayu Robotics was founded with a vision to revolutionize how industries approach aerial data collection and analysis. 
                We combine cutting-edge drone technology with advanced analytics to deliver actionable insights.
              </p>
              <p className='text-gray-300 text-lg leading-relaxed'>
                From construction monitoring to agricultural assessment, our team of certified pilots and engineers 
                ensures every mission is executed with precision, safety, and excellence.
              </p>
            </div>
            <div className='relative'>
              <img 
                src="service1.jpg" 
                alt="Drone in action" 
                className='w-full h-80 object-cover rounded-lg shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-8 rounded-xl bg-[#15161a] border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
              <div className='w-16 h-16 bg-[#ffcf14] rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                </svg>
              </div>
              <h3 className='text-xl text-white mb-4'>Our Mission</h3>
              <p className='text-gray-400'>
                To provide cutting-edge drone solutions that transform how businesses collect, analyze, and utilize aerial data.
              </p>
            </div>
            <div className='text-center p-8 rounded-xl bg-[#15161a] border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
              <div className='w-16 h-16 bg-[#ffcf14] rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'/>
                </svg>
              </div>
              <h3 className='text-xl text-white mb-4'>Our Vision</h3>
              <p className='text-gray-400'>
                To be the leading provider of drone technology solutions, setting new standards for safety, innovation, and excellence.
              </p>
            </div>
            <div className='text-center p-8 rounded-xl bg-[#15161a] border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
              <div className='w-16 h-16 bg-[#ffcf14] rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' clipRule='evenodd'/>
                </svg>
              </div>
              <h3 className='text-xl text-white mb-4'>Our Values</h3>
              <p className='text-gray-400'>
                Safety, quality, innovation, and client satisfaction are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
