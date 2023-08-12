"use client" 
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'



const HeroSection = () => {
    const [text]: any = useTypewriter({
    words: [ "MERN stack developer"," Django developer "," Student @ IIIT Gwalior :)"],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })
  return (
    <section id="home">
       <div className='flex flex-col text-center items-center justify-center md:flex-row md:space-x-4 md:text-left md:pt-20 md:pb-20 sm:pt-20'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl mt-6 ' src='/myphoto.jpeg' alt='' width={300} height={300}/>
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl'> Hi, <span className='font-bold text-teal-500'>Sachin Jayadev</span>  this side!</h1>
                <p className='text-lg mt-4 mb-6 md:text-3xl'>I am a 
                  <span className="text-teal-500 font-bold"> {text} </span> 
                  <Cursor />
                </p>
            </div>
       </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection