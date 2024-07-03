import Image from 'next/image';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import { SlBadge } from 'react-icons/sl';
import { LinearGradient } from 'react-text-gradients';
import html from '@/../public/html.png'
import css from '@/../public/CSS-Logo.png'
import js from '@/../public/js logo.png'
import tailwind from '@/../public/tailwind.png'
import reactLogo from '@/../public/react.png'

const Skills = () => {
    return (
        <div className='py-12' id='skills'>
            <div className='max-w-screen-md mx-auto text-center my-10 space-y-2'>
                <h2 className='text-5xl font-extrabold'>
                    <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                        My skills
                    </LinearGradient></h2>
                <p className='text-lg font-semibold'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>


            <div>
                <div className='grid grid-cols-5  justify-center gap-6'>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-lg group py-6 font-bold w-60 h-60 px-6 rounded-badge flex flex-col  hover:text-white  border items-center link-gradient text-white'>
                            <Image src={html} alt='html' className='rounded-badge p-4'></Image>
                            <h3 className='text-4xl font-extrabold text-center  uppercase'>95%</h3>

                        </div>
                        <p className='text-purple-700 text-lg font-bold text-center'>HTML</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-lg group py-6 font-bold w-60 h-60 px-6 rounded-badge flex flex-col hover:text-white  border items-center link-gradient text-white'>
                            <Image src={css} alt='html' className='rounded-badge p-4'></Image>
                            <h3 className='text-4xl font-extrabold text-center  uppercase'>92%</h3>

                        </div>
                        <p className='text-purple-700 text-lg font-bold text-center'>CSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-lg group py-6 font-bold w-60 h-60 px-6 rounded-badge  hover:text-white flex flex-col  border items-center link-gradient text-white'>
                            <Image src={js} alt='html' className='rounded-badge t p-4' width={160} height={160}></Image>
                            <h3 className='text-4xl font-extrabold text-center  uppercase'>92%</h3>

                        </div>
                        <p className='text-purple-700 text-lg font-bold text-center'>JS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-lg group py-6 font-bold w-60 h-60 px-6 rounded-badge  hover:text-white flex flex-col  border items-center link-gradient text-white'>
                            <Image src={tailwind} alt='html' className='rounded-badge t p-4' ></Image>
                            <h3 className='text-4xl font-extrabold text-center  uppercase'>92%</h3>

                        </div>
                        <p className='text-purple-700 text-lg font-bold text-center'>Tailwind CSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-lg group py-6 font-bold w-60 h-60 px-6 rounded-badge  hover:text-white flex flex-col  border items-center link-gradient text-white'>
                            <Image src={reactLogo} alt='html' className='rounded-badge t p-4' ></Image>
                            <h3 className='text-4xl font-extrabold text-center  uppercase'>92%</h3>

                        </div>
                        <p className='text-purple-700 text-lg font-bold text-center'>React</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Skills;