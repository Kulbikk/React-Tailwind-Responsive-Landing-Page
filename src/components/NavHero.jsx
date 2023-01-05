import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import bgImageDesktop from '../assets/desktop/image-hero.jpg'
import bgImageMobile from '../assets/mobile/image-hero.jpg'

const NavHero = () => {

    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='relative'>
        <div className=' mx-auto flex w-full absolute justify-center items-center '>
            <nav className='container p-6 items-center justify-between flex md:hidden'>
                <h1 className='text-White text-4xl font-bold  font-atlanta'> loopstudios</h1>
                {nav ? <GiHamburgerMenu onClick={handleNav} size={30} className="text-White"/> : <IoMdClose onClick={handleNav} size={30} className="text-White z-20"/>}
            </nav>
            <div className={nav ? 'w-screen h-screen bg-Black absolute top-0 left-[-1000px] z-10 md:hidden ' : 'w-screen h-screen bg-Black absolute top-0 left-0 z-10 duration-200 ease-in md:hidden'}>
                <div className='container items-center justify-between flex-col'>
                    <h1 className='text-White text-4xl font-bold  font-atlanta p-6'> loopstudios</h1>
                    <ul className='text-White space-x-5 flex flex-col mt-24 space-y-6  font-josefin uppercase'>
                    <li className='ml-5 text-DarkGray text-3xl'><a href="#">About</a></li>
                    <li className=' text-DarkGray text-3xl'><a href="#">CAREERS</a></li>
                    <li className=' text-DarkGray text-3xl'><a href="#">Events</a></li>
                    <li className=' text-DarkGray text-3xl'><a href="#">Products</a></li>
                    <li className=' text-DarkGray text-3xl'><a href="#">Support</a></li>
                    </ul>
                </div>


            </div>
            

            <nav className='container mt-6 items-center justify-between hidden md:flex '>
                <h1 className=' text-White font-atlanta text-3xl'> loopstudios</h1>
                <ul className='text-White space-x-5 hidden md:flex font-josefin font-bold'>
                    <li className='hover:underline underline-offset-8 '><a href="#">About</a></li>
                    <li className='hover:underline underline-offset-8'><a href="#">Careers</a></li>
                    <li className='hover:underline underline-offset-8'><a href="#">Events</a></li>
                    <li className='hover:underline underline-offset-8'><a href="#">Products</a></li>
                    <li className='hover:underline underline-offset-8'><a href="#">Support</a></li>
                </ul>
            </nav> 
            
        </div>



        <div className='mx-auto flex w-full absolute justify-center top-72 items-start '>
            <div className='container mx-2 '>
            <div className=' border border-White text-White  w-full md:max-w-md p-8'>
                <h1 className='text-White text-4xl md:text-5xl font-josefin'> IMMERSIVE <br /> EXPERIENCES <br /> THAT <br className='md:hidden' /> DELIVER </h1>
            </div>
            </div>

        </div>

      <img src={bgImageDesktop} alt="desktop-hero" className=' w-screen h-[70vh] md:flex hidden'/>
      <img src={bgImageMobile} alt="mobile-hero" className='w-screen h-screen md:hidden'/>
    </div>
        
  )
}

export default NavHero