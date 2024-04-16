import React from 'react'
import { motion } from "framer-motion"
import Navbar from '@/components/Navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
        <div className='max-w-[1280px] mx-auto font-roboto md:mt-20 mt-5 px-8'>
    <div className='flex md:pl-7 space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center'>
            <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>

                <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-z z-3"></span>
            </div>
            <div className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffffab] via-[#f7d033] to-transparent" ></div>
        </div>
        <div  initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
            <h2 className="text-[20px] md:text-2xl mb-7  text-black js-build-in-item build-in-slideX-left build-in-animate font-bold" style={{transitionDelay: '200ms'}}>Reach out to us</h2>  
            <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                <p className="text-[#f7d033]">Artificial Intelligence Innovation and Research</p>
                Advancing the future with AI powered solutions.
            </h3>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact;