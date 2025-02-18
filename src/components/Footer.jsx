import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
  return (
    <>
        <footer className='bg-black text-white flex flex-col justify-center items-center'>
            <main className='flex gap-9 lg:gap-20 flex-row '>
                <section>
                    <h3>Exclusive</h3>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <section className='flex items-center border border-white p-2'>
                        <input type='search' placeholder='Enter your email' className='outline-none'/>
                        <LuSendHorizontal/>
                    </section>
                </section>
                <section>
                    <p>Support</p>
                    <p>1234, Part Street,<br/>DL-11111, India</p>
                    <p>test@testmail.com</p>
                    <p>+91- 980765321</p>
                </section>
                <section>
                    <ul>
                        <li>Account</li>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>Quick Link</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </section>
            </main>
            <hr className='text-gray-500 h-2'/>
            <p>&copy; Copyright Harmani 2025. All right reserved.</p>
        </footer>
    </>
  )
}

export default Footer