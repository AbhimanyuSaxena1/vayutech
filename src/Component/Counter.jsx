import React from 'react';
import CountUp from './Ui/CountUp';
import Magnet from '../Component/Ui/Magnet'

const Counter = () => {
  return (
    <main className="w-full min-h-[40vh] p-6  sm:p-10 ">
      <article className="w-full  cursor-pointer inline-block items-center justify-center text-black font-[Roboto] font-extralight text-4xl sm:text-5xl md:text-8xl lg:text-7=8xl">
      <Magnet padding={50} disabled={false} magnetStrength={8}><h1>Our<span className='text-amber-300'> Achievements</span></h1>   </Magnet>
      </article>
      <div className="cont flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-8">
        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6 sm:p-10 rounded-2xl bg-zinc-300 items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl text-black font-[Roboto]">Kilometers Covered</h1>
          <CountUp
            from={0}
            to={1000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl sm:text-6xl md:text-7xl font-[Antonio] text-black"
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6 sm:p-10 rounded-2xl bg-zinc-300 items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl text-black font-[Roboto]">Flying Hours</h1>
          <CountUp
            from={0}
            to={1000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl sm:text-6xl md:text-7xl font-[Antonio] text-black"
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6 sm:p-10 rounded-2xl bg-zinc-300 items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl text-black font-[Roboto]">Projects Done</h1>
          <CountUp
            from={0}
            to={1000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl sm:text-6xl md:text-7xl font-[Antonio] text-black"
          />
        </div>
      </div>
    </main>
  );
};

export default Counter;
