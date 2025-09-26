import React from 'react';
import CountUp from '../Component/CountUp';

const Counter = () => {
  return (
    <main className="w-full min-h-[40vh] p-6 sm:p-10 bg-black">
      <article className="w-full flex items-center justify-start text-white font-[Roboto] font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Our Achievements</h1>
      </article>
      <div className="cont flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-8">
        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6 sm:p-10 rounded-2xl bg-zinc-900 items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl text-white font-[Roboto]">Kilometers Covered</h1>
          <CountUp
            from={0}
            to={1000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl sm:text-6xl md:text-7xl font-[Antonio] text-white"
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6 sm:p-10 rounded-2xl bg-zinc-900 items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl text-white font-[Roboto]">Flying Hours</h1>
          <CountUp
            from={0}
            to={1000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl sm:text-6xl md:text-7xl font-[Antonio] text-white"
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6 sm:p-10 rounded-2xl bg-zinc-900 items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl text-white font-[Roboto]">Projects Done</h1>
          <CountUp
            from={0}
            to={1000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl sm:text-6xl md:text-7xl font-[Antonio] text-white"
          />
        </div>
      </div>
    </main>
  );
};

export default Counter;
