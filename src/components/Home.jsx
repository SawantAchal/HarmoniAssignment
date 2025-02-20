import React from 'react';

const Home = () => {
  return (
    <main className='h-screen flex flex-col justify-center items-center px-4 text-center bg-gradient-to-br from-yellow-200 to-amber-600'>
      <section className='space-y-3'>
        <p className='text-4xl sm:text-5xl lg:text-6xl font-bold'>
          WELCOME TO MY STORE
        </p>
        <p className='text-xl sm:text-2xl lg:text-3xl font-semibold'>
          YOUR SHOPPING DESTINATION
        </p>
      </section>
      <section className='mt-5 max-w-3xl'>
        <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
          Discover a wide range of products tailored just for you. 
          Shop with ease and find exactly what you need.
        </p>
      </section>
    </main>
  );
};

export default Home;
