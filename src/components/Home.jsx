import React from 'react'

const Home = () => {
  return (
    <>
        <main className='h-screen  flex flex-col justify-center items-center bg-gradient-to-br from-yellow-200 to-amber-600'>
            <section className=''>
                <p className='text-6xl font-bold'>WELCOME TO MY STORE</p>
                <p className='text-center text-3xl font-semibold '>YOUR SHOPPING DESTONATION</p>
            </section>
            <section className='mt-5'>
                <p className='text-2xl'>Discover a wind range of products tailored just for you.Shop with ease and find exactly wat you need.</p>
            </section>
        </main>
    </>
  )
}

export default Home