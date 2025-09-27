import React from 'react'

const AboutUs = () => {
  return (
    <main className='w-full min-h-[90vh]'>
      {/* Hero Section */}
      <section className='relative w-full h-[60vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-[url("droneBG.jpg")] bg-cover bg-center'></div>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10 text-center px-6'>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-light antonio text-white mb-6'>
            About <span className='text-[#ffcf14] font-[Antonio]'>Vaayu Robotics</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
            Pioneering the future of drone technology with precision, innovation, and excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className='pt-20 md:pt-40'>
        <div className='container max-w-xl-screen gap-20 md:gap-40 flex flex-col mx-auto px-6'>
          <div className='flex w-full  md:h-[50vh] md:flex-row flex-col gap-10 md:gap-20 items-center'>
            <div className='w-full md:w-1/2'>
              <h2 className='text-4xl  md:text-8xl font-light antonio text-black mb-6'>
                Our Story
              </h2>
              <p className='text-gray-600 text-xl leading-relaxed mb-6'>
                Vaayu Robotics was founded with a vision to revolutionize how industries approach aerial data collection and analysis. 
                We combine cutting-edge drone technology with advanced analytics to deliver actionable insights.
              </p>
              <p className='text-gray-600 text-xl leading-relaxed'>
                From construction monitoring to agricultural assessment, our team of certified pilots and engineers 
                ensures every mission is executed with precision, safety, and excellence.
              </p>
            </div>
            <div className='relative  md:w-1/2 overflow-hidden rounded-2xl md:rounded-4xl  bg-black'>
              <img 
                src="about1.jpg" 
                alt="Drone in action" 
                className='w-full h-full object-cover shadow-xl'
              />
            </div>
          </div>
           <div className='flex w-full md:flex-row flex-col gap-12 items-center'>
            <div className='w-full md:w-1/2 md:order-2'>
              <h2 className='text-3xl  md:text-8xl font-light antonio text-black mb-6'>
Shaping Tomorrow From the Sky              </h2>
              <p className='text-gray-600 text-xl leading-relaxed mb-6'>
               At Vaayu Robotics, we believe drones are the future of intelligent operations. By fusing autonomous flight systems, AI-driven analytics, and high-resolution imaging, our smart drones go far beyond aerial photography—they deliver actionable intelligence.       </p>
              <p className='text-gray-600 text-xl leading-relaxed'>
              From construction monitoring and agricultural mapping to infrastructure inspection, security, emergency response, and even last-mile delivery, our technology is transforming how businesses and governments work. With innovation, safety, and precision at the core, Vaayu Robotics is shaping tomorrow from the sky.       </p>
            </div>
            <div className='relative md:w-1/2 overflow-hidden rounded-2xl md:rounded-4xl order-1 bg-black'>
              <img 
                src="about2.jpg" 
                alt="Drone in action" 
                className='w-full h-full  object-cover  shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='py-16'>
        <div className='container max-w-xl-screen mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-8 rounded-xl bg-[#15161a] border border-white/5 hover:border-[#ffcf14]/30 transition-colors'>
              <div className='w-16 h-16 bg-[#ffcf14] rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-black' fill='currentColor' viewBox='0 0 25 25'>
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                </svg>
              </div>
              <h3 className='text-2xl text-white mb-4'>Our Mission</h3>
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
              <h3 className='text-2xl text-white mb-4'>Our Vision</h3>
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
              <h3 className='text-2xl text-white mb-4'>Our Values</h3>
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
