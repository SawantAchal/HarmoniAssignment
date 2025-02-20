import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbSquareCheckFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <main className='flex justify-center items-center py-10 font-semibold'>
        <section className='flex flex-col sm:flex-row gap-6 sm:gap-10 text-center'>
            <section className='flex flex-col items-center space-y-2'>
                <div className='bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center text-4xl'>
                    <TbTruckDelivery />
                </div>
                <p className="text-lg">FREE AND FAST DELIVERY</p>
                <p className="text-gray-600 text-sm">Free delivery for all orders over $140</p>
            </section>
            <section className='flex flex-col items-center space-y-2'>
                <div className='bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center text-4xl'>
                    <MdOutlineSupportAgent />
                </div>
                <p className="text-lg">24/7 CUSTOMER SERVICE</p>
                <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
            </section>
            <section className='flex flex-col items-center space-y-2'>
                <div className='bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center text-4xl'>
                    <TbSquareCheckFilled />
                </div>
                <p className="text-lg">MONEY BACK GUARANTEE</p>
                <p className="text-gray-600 text-sm">We return money within 30 days</p>
            </section>
        </section>
    </main>
  );
};

export default Contact;
