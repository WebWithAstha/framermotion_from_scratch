import React from 'react'
import Basics from './Basics'
import AnimationControls from './AnimationControls'

const Home = () => {
  return (
    <>
      <div
        className='w-full relative z-[0] h-[70vh] px-[2vw] flex flex-col justify-center items-center p-[2vw] gap-[2vw]  bg-neutral-200'>
        <img className='w-full z-[-1] h-screen top-0 left-0 fixed object-cover' src="https://plus.unsplash.com/premium_photo-1667587245819-2bea7a93e7a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Basics />
      </div>
      <AnimationControls/>
    </>
  )
}

export default Home