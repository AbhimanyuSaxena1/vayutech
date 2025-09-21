import React from 'react'
import ServiceCard from '../../Component/Services/serviceCard'
const Services = () => {
  const services = [
    {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Construction",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
    {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Powerline Monitoring",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
    {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Solar Power Plant Inspection",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
     {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Road Inspection",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
     {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Oil and Gas Line Inspection",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
     {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Agriculture",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
    {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Disaster Management",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
    {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:"Consultation & Training",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data."

    },
      {
      image:"https://images.unsplash.com/photo-1543353275-1312506769cd?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM1ODQyNDYwfA&ixlib=rb-4.0.3",
      title:" Mapping & Survey",
      link:"/",
      description:"Track site progress, create 3D models, and manage construction timelines with real-time drone data.",
      keyFeatures:[{heading:"",
        paragraph:""
      }]
    }


  ]


  return (

    <main className='w-full min-h-[90vh] '>
      <article className='w-[100%] p-10  flex flex-col leading-nonr md:h-[40vh] h-[20vh] py-10  lg:h-[40vh]'>
          <h1 className='text-black text-[1rem] px-3 py-1 bg-yellow-400 w-fit rounded-full font-left font-[Antonio]  '>Our Services</h1>
            <h1 className='exp text-[2rem] md:text-[7rem] lg:text-[7rem] text-black font-extralight font-[Antonio]'>Explore Full Range of Our Products</h1>
      </article>
      <section className='py-10 flex flex-wrap items-center justify-center gap-10 px-10 min-h-[50vh] mx-auto max-w-xl-screen'>
       {
        services.map((service, index) => (
          <ServiceCard key={index} id={index} image={service.image} title={service.title} link={service.link} description={service.description} />
        ))
       }
      </section>
    </main>
  )
}

export default Services