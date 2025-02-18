import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbSquareCheckFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <>
        <main className='flex justify-center items-center bg-amber-300'>
            <section className='flex bg-pink-500 gap-10'>
                <section className='text-center flex flex-col items-center'>
                    <section className='bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center text-4xl'><TbTruckDelivery/></section>
                    <p>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </section>
                <section className='text-center flex flex-col items-center'>
                    <section className='bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center text-4xl'><MdOutlineSupportAgent/></section>
                    <p>24/7 CUSTOMER SERVICE</p>
                    <p>Frinendly 24/7 customer support</p>
                </section>
                <section className='text-center flex flex-col items-center'>
                    <section className='bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center text-4xl'><TbSquareCheckFilled/></section>
                    <p>MONEY BACK GUARANTEE</p>
                    <p>We return money within 30 days</p>
                </section>
            </section>
        </main>
    </>
  )
}

export default Contact