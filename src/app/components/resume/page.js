import Link from 'next/link';
import React from 'react';
import { ImArrowDownRight2, ImArrowUpRight2 } from 'react-icons/im';
import { LinearGradient } from 'react-text-gradients';
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from 'react-icons/fa6';
const Resume = () => {
    return (
        <div className='py-12' id='resume'>
            <div className='max-w-screen-md mx-auto text-center my-10 space-y-2'>
                <h2 className='text-5xl font-extrabold'>
                    <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                        My resume
                    </LinearGradient></h2>
                <p className='text-lg font-semibold'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>


            <div>
                <div className='grid grid-cols-2 max-w-screen-lg mx-auto justify-center gap-16'>
                    <div className='space-y-4'>
                        <h2 className='text-5xl font-extrabold'>

                            <LinearGradient className='inline-flex items-center justify-center gap-2' gradient={['to left', '#17acff ,#ff68f0']}>
                                <SlBadge className='inline text-purple-500 font-extrabold text-5xl' />  My Experience
                            </LinearGradient>
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <div className='text-lg group py-6 font-bold w-screen max-w-md px-6 rounded-xl  hover:text-white  border items-center link-gradient text-white'>
                                <p className=' text-2xl text-purple-500 group-hover:text-white '>2022-Present</p>
                                <h3 className='text-3xl  uppercase'>I have no job experience</h3>
                                <p className='text-lg'>Barishal, Bangladesh</p>
                            </div>

                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-5xl font-extrabold'>
                            <LinearGradient className='inline-flex items-center justify-center gap-2' gradient={['to left', '#17acff ,#ff68f0']}>
                                <FaGraduationCap className='inline text-purple-500 font-extrabold text-5xl' />  My Education
                            </LinearGradient>
                        </h2>
                        <div className='flex flex-col gap-4' >
                            <div className='text-lg group py-6 font-bold w-screen max-w-md px-6 rounded-xl hover:text-white  border items-center link-gradient text-white'>
                                <p className=' text-2xl text-purple-500 group-hover:text-white '>2023-2024</p>
                                <h3 className='text-3xl  uppercase'>web development Course</h3>
                                <p className='text-lg'>Programming Hero, Dhaka.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;