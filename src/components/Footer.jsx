import React from 'react'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'


const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row bg-black items-center justify-center mt-28 '>

        <div className='container flex justify-between flex-col md:flex-row mt-12 md:mt-0 items-center'> 

    <div className="flex flex-col items-center justify-center md:items-start ">
            <div>
                <h1 className='text-White font-atlanta text-4xl'> loopstudios </h1>
            </div>

            <div>
                <ul className='text-white md:flex md:gap-7 space-y-4 md:space-y-0 mt-6 md:mt-2 font-atlanta text-center'>
                   <li className=' text-DarkGray cursor-pointer hover:underline underline-offset-8'>About</li>
                   <li className=' text-DarkGray cursor-pointer hover:underline underline-offset-8'>Careers</li>
                   <li className=' text-DarkGray cursor-pointer hover:underline underline-offset-8'>Events</li>
                   <li className=' text-DarkGray cursor-pointer hover:underline underline-offset-8'>Products</li>
                   <li className=' text-DarkGray cursor-pointer hover:underline underline-offset-8'>Support</li>
                 </ul>
        </div>

    </div>
        
        
            <div className='flex flex-col items-center justify-center md:items-end  '>
            <div className='flex gap-4 mt-10 items-center'>
                <a href='facebook.com'> <img className='' src={facebook} alt="" /> </a>
                <a href="twitter.com"> <img src={twitter} alt="" /> </a>
                <a href="pinterest.com"> <img src={pinterest} alt="" /> </a>
                <a href="instagram.com"><img src={instagram} alt="" /></a>
            </div>

            <div className=' text-DarkGray mt-4 mb-12'>
                <p> © 2021 Loopstudios. All rights reserved </p>
            </div>
        </div>

        </div>
    </footer>
  )
}

export default Footer