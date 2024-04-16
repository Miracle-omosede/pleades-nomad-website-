import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='max-w-[1280px] mx-auto font-roboto mt-20'>
    <div className='flex md:pl-7 space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center'>
            <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

                <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
            </div>
            <div className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent" ></div>
        </div>
        <div  initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
            <h2 className="text-[20px] md:text-2xl mb-7  text-black js-build-in-item build-in-slideX-left build-in-animate font-bold" style={{transitionDelay: '200ms'}}>About Us</h2>  
            <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                <p className="text-[#939aff]">Artificial Intelligence Innovation and Research</p>
                Advancing the future with AI powered solutions.
            </h3>
        </div>
    </div>
    </div>
  )
}

export default About;