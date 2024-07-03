import Link from 'next/link';
import React from 'react';
import { ImArrowDownRight2, ImArrowUpRight2 } from 'react-icons/im';
import { LinearGradient } from 'react-text-gradients';

const Works = () => {
    return (
        <div className='py-12' id='works'>
            <div className='max-w-screen-md mx-auto text-center my-10 space-y-2'>
                <h2 className='text-5xl font-extrabold'>
                    <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                        My Recent works
                    </LinearGradient></h2>
                <p className='text-lg font-semibold'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>


            <div>
                <div className=''>

                    <Link href="/services/design" className='text-lg py-6  group px-6 inline-grid grid-cols-6  border items-center link-gradient text-white'>
                        <p>01</p>
                        <h3 className='text-3xl font-bold col-span-2'>E-commerce website</h3>
                        <p className='col-span-2'>I break down complex user experience problems to create integrity focussed solutions that contact billions of people.</p>
                        <div className='text-right'>
                            <ImArrowUpRight2 className='hidden group-hover:inline' />
                            <ImArrowDownRight2 className='group-hover:hidden inline text-purple-500' />
                        </div>
                    </Link>
                    <Link href="/services/design" className='text-lg py-6   group px-6 inline-grid grid-cols-6 border items-center link-gradient text-white'>
                        <p>02</p>
                        <h3 className='text-3xl font-bold col-span-2'>Protfolio/landing page</h3>
                        <p className='col-span-2'>I break down complex user experience problems to create integrity focussed solutions that contact billions of people.</p>
                        <div className='text-right'>
                            <ImArrowUpRight2 className='hidden group-hover:inline' />
                            <ImArrowDownRight2 className='group-hover:hidden inline text-purple-500' />
                        </div>
                    </Link>
                    <Link href="/services/design" className='text-lg py-6   group px-6 inline-grid grid-cols-6 border items-center link-gradient text-white'>
                        <p>03</p>
                        <h3 className='text-3xl font-bold col-span-2'>Blog website</h3>
                        <p className='col-span-2'>I break down complex user experience problems to create integrity focussed solutions that contact billions of people.</p>
                        <div className='text-right'>
                            <ImArrowUpRight2 className='hidden group-hover:inline' />
                            <ImArrowDownRight2 className='group-hover:hidden inline text-purple-500' />
                        </div>
                    </Link>
                    <Link href="/services/design" className='text-lg py-6   group px-6 inline-grid grid-cols-6 border items-center link-gradient text-white'>
                        <p>04</p>
                        <h3 className='text-3xl font-bold col-span-2'>Functional web application</h3>
                        <p className='col-span-2'>I break down complex user experience problems to create integrity focussed solutions that contact billions of people.</p>
                        <div className='text-right'>
                            <ImArrowUpRight2 className='hidden group-hover:inline' />
                            <ImArrowDownRight2 className='group-hover:hidden inline text-purple-500' />
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Works;