import React from 'react'
import { IoIosCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Header = () => {

  return (
    <>
        <header className='flex justify-around h-16  bg-yellow-400 items-center'>
            <section>
                <p>HARMONI</p>
            </section>
            <section className='flex gap-7 items-center'>
                <ul className='lg:flex gap-5 hidden '>
                    <li>Home Page</li>
                    <li>Categories</li>
                    <li>Contact Us</li>
                    <li>More Options</li>
                </ul>
                <input type='search' placeholder='  What are you looking for?' className='h-10 outline-none w-60 border b'/>
                <IoIosCart/>
                <FaUser/>
            </section>
        </header>
    </>
  )
}

export default Header