import Image from 'next/image';
import React from 'react';
import myImage from '@/../public/naimul.png'
import { FaDownload, FaFacebook, FaFacebookF, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';
const Hero = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={myImage}
                    alt='Naimul Islam'
                    className="max-w-sm hover:outline-4 outline   outline-2 outline-purple-500 hover:transform hover:rotate-2 duration-500 hover:scale-105 ease-in-out rounded-3xl shadow-2xl" />
                <div>
                    <h2 className="text-4xl font-bold">Hi, I am Naimul Islam</h2>
                    <h1 className="text-6xl font-bold ">Frontend Web Developer</h1>
                    <p className="py-6">
                        I break down complex user experinces problems to create integritiy focussed solution that connect billions of people
                    </p>
                    <div className='flex gap-2'>
                        <button className="btn bg-right-bottom hover:bg-left-bottom bg-gradient-to-r hover:bg-gradient-to-l text-white text-lg to-purple-800 from-purple-500 transform hover:scale-105  ease-in-out duration-1000  border-0">Download CV <FaDownload /> </button>
                        <Link href="https://www.facebook.com/naimuliu/" className=" text-4xl btn btn-circle btn-md rounded-full hover:bg-purple-500 border-purple-500  hover:border-purple-500  text-purple-500 hover:text-white  transform ease-in-out duration-1000   "><FaFacebookF /></Link>
                        <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className=" text-4xl btn btn-circle btn-md rounded-full hover:bg-purple-500 border-purple-500 hover:border-purple-500  text-purple-500 hover:text-white  transform ease-in-out duration-1000   "><FaLinkedinIn /></Link>
                        <Link href="https://github.com/naimul-123" className=" text-4xl btn btn-circle btn-md rounded-full hover:bg-purple-500 border-purple-500 hover:border-purple-500  text-purple-500 hover:text-white  transform ease-in-out duration-1000   "><FaGithubAlt /></Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Hero;