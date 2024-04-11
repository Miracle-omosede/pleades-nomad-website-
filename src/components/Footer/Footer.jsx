"use client"
import React, { useContext } from 'react';
import { CursorContext } from '../CursorContext';

const Footer = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext( CursorContext );
  return (
    <div className='footer relative pt-14 break-words '>
      <div className='max-w-[1280px] mx-auto relative z-[2] overflow-hidden md:items-center md:justify-center items-start  justify-start  flex'>
        <div className='flex flex-col md:items-center md:justify-center items-start justify-start lg:flex-row py-10 mb-8 space-x-6 px-4'>
            <div className='mb-12 px-2'>
              <a href="/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to home&quot;,&quot;label&quot;:&quot;text:home&quot;}" className="color-fg-default text-white text-4xl d-inline-block" aria-label="Go to GitHub homepage">
                {/* <svg height="30" aria-hidden="true" viewBox="0 0 45 16" fill='currentColor' version="1.1" width="84" data-view-component="true" className="text-white">
                  <path d="M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"></path>
                </svg> */}
                LOGO
              </a>
              <div className='text-white'  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
                <h2 className='mt-6 font-semibold'>Subscribe to our newsletter</h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">Get Innovation updates, company news, and more.</p>
                <a href="" className='mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg'>Subscribe</a>
              </div>
            </div>

            <div className='flex flex-col w-full justify-between gap-2'>
            <div className='text-white'  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
                <h2 className='mt-6 mb-2 font-semibold flex items-center'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> &nbsp;
                    <span>Office Location</span>
                </h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">B15/6 step one estate, dorkashi crescent, FCT Abuja</p>
              </div>
            <div className='text-[#7d8590]'>
                <ul className='text-[14px] flex flex-row md:gap-6 gap-4 flex-wrap'>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >About</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Services</a></li>
                    <li className='mb-4'><a href="">Team</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Career</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Support</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Blog</a></li>
                </ul>
              </div>
            </div>
            {/* <div className='lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-2'>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Services</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Features</a></li>
                    <li className='mb-4'><a href="">Security</a></li>
                    <li className='mb-4'><a href="">Team</a></li>
                    <li className='mb-4'><a href="">Enterprise</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Company</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">About</a></li>
                    <li className='mb-4'><a href="">Partners</a></li>
                    <li className='mb-4'><a href="">Careers</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Contact</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Socials</a></li>
                    <li className='mb-4'><a href="">Partners</a></li>
                    <li className='mb-4'><a href="">Careers</a></li>
                </ul>
              </div>
            </div> */}
        </div>
      </div>
      <div className='bg-[#161b22]'>
        <div className='max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4'>
          <ul className='flex items-center max-md:mb-4  '>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
          </ul>
          <ul className='flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap' >
            <li className="mr-3 ">© 2024 Pleiades, Inc.</li>
            <li className='mr-3 '><a href="">Terms</a></li>
            <li className='mr-3 '><a href="">Privacy</a></li>
            <li className='mr-3 '><a href="">Sitemap</a></li>
          </ul>
        </div>
      </div>
      </div>

  )
}

export default Footer;