"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import CodeSpace from '../Productivity/CodeSpace';
// import Discount from './Discount';
import HoverCard from '../Productivity/HoverCard';
import Discount from './Discount';

const Collaboration = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <div className='max-w-[1280px] mx-auto font-roboto'>
      <div className='flex md:pl-7 space-x-3 md:space-x-10'>
       
        <div className='relative'>
          <div className='flex justify-center'>
        
            <Discount />
          </div>
        </div>
      </div>
      <div className='flex justify-between space-x-10 mt-[80px]'>
        <HoverCard
          title='Virtual Office'
          description='Empower your remote teams with a virtual office space where they can collaborate in real-time.'
          hovered={hovered}
          setHovered={setHovered}
        />
        <HoverCard
          title='Task Management'
          description='Efficiently manage tasks, deadlines, and projects with our intuitive task management tool.'
          hovered={hovered1}
          setHovered={setHovered1}
        />
        <HoverCard
          title='Document Sharing'
          description='Seamlessly share documents and files across your team for improved collaboration.'
          hovered={hovered2}
          setHovered={setHovered2}
        />
      </div>
    </div>
  );
};

export default Collaboration;
