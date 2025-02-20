
import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 px-6'>
        <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left'>
            <section className='space-y-3.5'>
                <h3 className='pb-3 font-bold text-xl'>Exclusive</h3>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className='flex items-center border border-white p-2 rounded-md'>
                    <input type='email' placeholder='Enter your email' className='bg-transparent outline-none w-full text-white px-2'/>
                    <LuSendHorizontal className="cursor-pointer"/>
                </div>
            </section>
            <section className='space-y-3.5'>
                <p className='pb-3 font-bold text-xl'>Support</p>
                <p>1234, Part Street,<br/>DL-11111, India</p>
                <p>test@testmail.com</p>
                <p>+91- 980765321</p>
            </section>
            <section>
                <ul className='space-y-3.5'>
                    <li className='pb-3 font-bold text-xl'>Account</li>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </section>
            <section>
                <ul className='space-y-3.5'>
                    <li className='pb-3 font-bold text-xl'>Quick Links</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </section>
        </main>
        <div className="border-t border-gray-700 mt-8"></div>
        <p className='text-center pt-5 text-gray-400'>&copy; Copyright Harmani 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
