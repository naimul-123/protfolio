"use client"
import { React, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import logo from '@/../public/logo.gif'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = <>
        <li className='group px-4 py-2 hover:bg-gray-900' ><Link className='text-white text-lg font-bold' href="/services">Service</Link>
            <div className='group-hover:bg-gradient-to-r h-1 from-purple-500 to-purple-800 ease-in-out duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left   '></div>
        </li>
        <li className='group px-4 py-2 hover:bg-gray-900' ><Link className='text-white text-lg font-bold' href="/work">Work</Link>
            <div className='group-hover:bg-gradient-to-r h-1 from-purple-500 to-purple-800 ease-in-out duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left   '></div>
        </li>
        <li className='group px-4 py-2 hover:bg-gray-900' ><Link className='text-white text-lg font-bold' href="/resume">Resume</Link>
            <div className='group-hover:bg-gradient-to-r h-1 from-purple-500 to-purple-800 ease-in-out duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left   '></div>
        </li>
        <li className='group px-4 py-2 hover:bg-gray-900' ><Link className='text-white text-lg font-bold' href="/skills">Skills</Link>
            <div className='group-hover:bg-gradient-to-r h-1 from-purple-500 to-purple-800 ease-in-out duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left   '></div>
        </li>
        <li className='group px-4 py-2 hover:bg-gray-900 ' ><Link className='text-white text-lg font-bold' href="/testimonials">Testimonials</Link>
            <div className='group-hover:bg-gradient-to-r h-1 from-purple-500 to-purple-800 ease-in-out duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left   '></div>
        </li>
        <li className='group px-4 py-2 hover:bg-gray-900' ><Link className='text-white text-lg font-bold' href="/contact">Contact</Link>
            <div className='group-hover:bg-gradient-to-r h-1 from-purple-500 to-purple-800 ease-in-out duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left   '></div>
        </li>
    </>
    const handleMenuBar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='flex justify-between items-center bg-black py-3 fixed top-0 z-40 w-full mx-auto max-w-screen-2xl px-6'>
            <div className='relative'>
                <div className='flex gap-1 items-center'>
                    <button onClick={handleMenuBar} className='btn btn-square'><FaBars className='text-lg' /></button>
                    <h2 className=" text-4xl text-purple-600 text- font-bold ">Naimul Islam</h2>
                    {/* <Image src={logo} alt='logo' width="60" height="60" /> */}

                </div>
                <div className={`absolute ${isOpen ? "block" : "hidden"} md:hidden  top-20 left-2`}>
                    <ul className='w-full  max-w-md flex flex-col bg-gray-300 space-y-2 '>
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-0'>
                    {navLinks}
                </ul>
            </div>
            <div>
                <button className='btn bg-gradient-to-r hover:bg-gradient-to-l text-white text-lg to-purple-800 from-purple-500  border-0'>Hire Me</button>
            </div>
        </div>
    );
};

export default Navbar;