import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'





const Topbar = () => {

  // const



  return (
    <div className="w-full md:h-[70vh] h-max md:px-0 px-[8vw] flex justify-between items-center relative">
      <img className='md:absolute  w-[20vw] md:w-[40vw] top-[2%] left-[10%] md:left-[25%] z-[9] mix-blend-multiply' src="https://rukminim2.flixcart.com/image/416/416/xif0q/baby-rattle/0/j/c/newborn-baby-dog-grey-hanging-pulling-developmental-toy-baby-moo-original-imah2d4wnya7duks.jpeg?q=70&crop=false" alt="" />
      <motion.div className="md:absolute right-[4%] top-[20%] md:top-[30%]">
        <h1 className='text-[6vw] leading-none'>Oh, the</h1>
        <h1 className='text-[6vw] leading-none'><span className='text-[10vw]'> joy</span> of <span className='text-[10vw]'> toys!</span> </h1>
      </motion.div>
    </div>

  )
}
const Bottombar = () => {
  return (
    <div className="w-full h-max relative md:pt-[20vh] pt-[10vw] z-[0] flex flex-col justify-between">
      <div className="md:w-[50%]">
        <p className='md:text-[2vw] text-[4vw]'>Our humans bring us these delightful objects of entertainment and chewing pleasure. <br /> Imagine this: there we are, minding our own business, when suddenly, our human comes home with a new toy. It's like Christmas, our birthday, and the best day ever all rolled into one! We sniff it, we chew it, we throw it around, and repeat.</p>
      </div> 
      <div className="md:absolute md:h-[80vh] translate-y-[20%] bottom-0 z-[-1] right-0 overflow-hidden">
      <img className='w-max h-full object-contain' src="https://img.freepik.com/free-photo/pure-youth-crazy-english-cocker-spaniel-young-dog-is-posing_155003-32328.jpg?t=st=1722416939~exp=1722420539~hmac=b9a462d28a79c14db7f14753540882b5f66f4e5410d79775543e833856e5e8ab&w=996" alt="" />

      </div>

    </div>

  )
}


const Loves = () => {

  const { scrollYProgress } = useScroll()





  return (
    <div className='w-full relative h-max z-[0] overflow-hidden md:p-[4vw] px-[8vw] bg-[#efefef]'>
      <Topbar />
      <Bottombar />
    </div>
  )
}

export default Loves