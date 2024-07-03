"use client"
import { React, useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import logo from '@/../public/logo.gif'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSec, setActiveSec] = useState('#')


    useEffect(() => {
        const handleHasChange = () => {
            setActiveSec(window.location.hash);
        }

        window.addEventListener('hashchange', handleHasChange);
        return () => {
            window.removeEventListener('hashchange', handleHasChange)
        }
    }, []);

    const handleActiveLink = (id) => {
        setActiveSec(`#${id}`);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    console.log(activeSec);
    // console.log(router);
    const navLinks = <>
        <li className={`px-4 py-2 hover:bg-purple-500 hover:text-white font-bold {${activeSec === '#services' ? "text-white bg-purple-600" : ""}`} onClick={() => handleActiveLink('services')} ><Link className='hover:bg-transparent' href="#services">Service</Link>
        </li>
        <li className={`px-4 py-2 hover:bg-purple-500 hover:text-white font-bold {${activeSec === '#works' ? "text-white bg-purple-600" : ""}`} onClick={() => handleActiveLink('works')} ><Link className='hover:bg-transparent' href="#works">Work</Link>
        </li>
        <li className={`px-4 py-2 hover:bg-purple-500 hover:text-white font-bold {${activeSec === '#resume' ? "text-white bg-purple-600" : ""}`} onClick={() => handleActiveLink('resume')} ><Link className='hover:bg-transparent' href="#resume">Resume</Link>
        </li>
        <li className={`px-4 py-2 hover:bg-purple-500 hover:text-white font-bold {${activeSec === '#skills' ? "text-white bg-purple-600" : ""}`} onClick={() => handleActiveLink('skills')} ><Link className='hover:bg-transparent' href="#skills">Skills</Link>
        </li>
        <li className={`px-4 py-2 hover:bg-purple-500 hover:text-white font-bold {${activeSec === '#testimonials' ? "text-white bg-purple-600" : ""}`} onClick={() => handleActiveLink('testimonials')} ><Link className='hover:bg-transparent' href="#testimonials">Testimonials</Link>
        </li>
        <li className={`px-4 py-2 hover:bg-purple-500 hover:text-white font-bold {${activeSec === '#contact' ? "text-white bg-purple-600" : ""}`} onClick={() => handleActiveLink('contact')} ><Link className='hover:bg-transparent' href="#contact">Contact</Link>
        </li>
    </>
    const handleMenuBar = () => {
        setIsOpen(!isOpen)
    }

    return (

        <div className="navbar bg-black text-white sticky top-0 z-50 h-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm bg-gray-950 dropdown-content rounded-box z-[1] mt-3 w-[70vw] p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link href="#" className="btn btn-ghost text-xl">Naimul Islam</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn bg-gradient-to-r hover:bg-gradient-to-l text-white text-lg to-purple-800 from-purple-500  border-0'>Hire Me</button>

            </div>
        </div>

    );
};

export default Navbar;