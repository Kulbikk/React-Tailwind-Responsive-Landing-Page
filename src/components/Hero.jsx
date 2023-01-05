import React from 'react'
import imgInteractive from '../assets/mobile/image-interactive.jpg'

const Hero = () => {
  return (
    <div className='relative container mx-auto justify-center md:justify-start items-center flex flex-col md:flex-row '>
        <div className='mt-24 mx-6'>
            <img src={imgInteractive} alt="" />
        </div>
        <div className=' flex flex-col items-center text-center  mx-4 max-w-xl mt-12 md:absolute md:bg-White md:w-2/4  md:h-64 md:pl-16 md:pt-12 md:left-[510px] md:text-left md:items-start md:top-[240px] '>
            <h1 className=' text-Black text-4xl font-josefin'> THE LEADER IN <br />INTERACTIVE VR</h1>

            <p className='mt-4 text-DarkGray font-josefin font-bold  leading-6'> Founded in 2011, Loopstudios has
             been producing world-class virtual reality projects for some of the best companies around the gloe.
              Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </p>
        </div>
    </div>
  )
}

export default Hero