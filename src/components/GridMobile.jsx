import React from 'react'
import curiosity from '../assets/mobile/image-curiosity.jpg'
import deepEarth from '../assets/mobile/image-deep-earth.jpg'
import fisheye from '../assets/mobile/image-fisheye.jpg'
import fromAbove from '../assets/mobile/image-from-above.jpg'
import grid from '../assets/mobile/image-grid.jpg'
import nightArcade from '../assets/mobile/image-night-arcade.jpg'
import pocketBorealis from '../assets/mobile/image-pocket-borealis.jpg'
import soccerTeam from '../assets/mobile/image-soccer-team.jpg'

const GridMobile = () => {

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
    <div className='container mx-auto items-center flex flex-col mt-24  md:hidden'>
        <h1 className='text-Black text-4xl font-josefin mb-11'> OUR CREATIONS</h1> 
            { creations.map(({id, text1, text2, src}) => ( 
                 <div key={id} className='relative'> 
                <div className='mx-6 mt-6'>
                <img src={src} alt="hello" />
                <p className='absolute font-josefin text-White top-[80px] text-2xl left-[50px] uppercase'>{text1} <br /> {text2} </p>
                </div>
                </div>
            ))}
                <button className='px-8 py-1 my-8 border border-black text-xl'> SEE ALL </button>
        
    </div>
  )
}

export default GridMobile