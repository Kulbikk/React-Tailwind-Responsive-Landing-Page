import React from 'react'
import curiosity from '../assets/desktop/image-curiosity.jpg'
import deepEarth from '../assets/desktop/image-deep-earth.jpg'
import fisheye from '../assets/desktop/image-fisheye.jpg'
import fromAbove from '../assets/desktop/image-from-above.jpg'
import grid from '../assets/desktop/image-grid.jpg'
import nightArcade from '../assets/desktop/image-night-arcade.jpg'
import pocketBorealis from '../assets/desktop/image-pocket-borealis.jpg'
import soccerTeam from '../assets/desktop/image-soccer-team.jpg'

const GridDesktop = () => {

    const creations = [
        {
            id: 1,
            src: curiosity,
            text1: 'the',
            text2: 'curiosity'
        },
        {
            id: 2,
            src: deepEarth,
            text1: 'deep',
            text2: 'earth'
        },
        {
            id: 3,
            src: fisheye,
            text1: 'make it',
            text2: 'fisheye'
        },
        {
            id: 4,
            src: fromAbove,
            text1: 'from up',
            text2: 'above vr'
        },
        {
            id: 5,
            src: grid,
            text1: 'the',
            text2: 'grid'
        },
        {
            id: 6,
            src: nightArcade,
            text1: 'night',
            text2: 'arcade'
        },
        {
            id: 7,
            src: pocketBorealis,
            text1: 'pocket',
            text2: 'borealis'
        },
        {
            id: 8,
            src: soccerTeam,
            text1: 'soccer',
            text2: 'team vr'
        },
    ]

  return (
    <div className='container mx-auto hidden md:block mt-24'>
        <div className='flex justify-between items-center m-auto mb-9 '>
            <h1 className='text-Black text-3xl font-josefin '>OUR CREATIONS </h1>
            <button className='px-8 border border-black text-md hover:bg-Black hover:text-White'> SEE ALL</button>
        </div>
        <div className='grid grid-rows-2 grid-cols-4 '>
        { creations.map(({id, text1, text2, src}) => ( 
                 <div key={id} className='relative'> 
                <div className='mx-6 mt-6 text-White hover:text-Black'>
                <img src={src} alt="hello" className='hover:opacity-30 hover:cursor-pointer hover:text-Black ' />
                <p className='absolute font-josefin tex top-[300px] text-2xl left-[50px] uppercase  '>{text1} <br /> {text2} </p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GridDesktop