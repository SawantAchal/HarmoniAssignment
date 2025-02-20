import React from 'react';

const Discover = () => {
  return (
    <main className='bg-black text-white p-6 text-center space-y-6 flex flex-col items-center'>
      <h1 className='text-2xl sm:text-3xl font-bold'>
        Discover Your Next Favorite Item
      </h1>
      <p className='text-lg sm:text-xl max-w-2xl leading-relaxed'>
        Browse our exclusive collection and find the perfect product tailored just for you.
      </p>
      <section className='flex flex-wrap justify-center gap-4'>
        <button className='border rounded-2xl w-24 sm:w-32 p-2 hover:bg-white hover:text-black transition'>
          SHOP
        </button>
        <button className='border rounded-2xl w-40 sm:w-48 p-2 hover:bg-white hover:text-black transition'>
          LEARN MORE
        </button>
      </section>
    </main>
  );
};

export default Discover;
