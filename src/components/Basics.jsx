import { motion , AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const Basics = () => {
    const [isVisible, setisVisible] = useState(false)
    return (
        <>
            <AnimatePresence mode="popLayout">
                {
                    isVisible &&
            <motion.div
            initial={{scale: 0,rotate:0,opacity:0}}
            animate={{rotate:180,scale:1,opacity:1}}
            transition={{duration:.5, type:'tween'}}
            exit={{scale: 0,rotate:0,opacity:0,transition:{duration:.5, delay:.2}}}
            className="bg-stone-300/[.8] relative overflow-hidden rounded w-[24vw] shrink-0 h-max grid grid-rows-6 grid-cols-6 shadow-inner">
                <div className="bg-[#c1b8b3]/[.3] h-[4vw] rounded"></div>
                <div className="bg-[#c1b8b3]/[.3] row-start-6 col-start-1 rounded row-span-1"></div>
                    <motion.div
                        initial={{
                            x: 0,
                            y: 0
                        }}
                        animate={{
                            x: ["0vw", "20vw", "20vw", "0vw", "0vw", "20vw", "20vw", "0vw", "0vw", "20vw", "20vw", "0vw"],
                            y: ["0%", "0%", "100%", "100%", "200%", "200%", "300%", "300%", "400%", "400%", "500%", "500%"],
                        }}
                        exit={{
                            y:0,
                            x:0,
                            transition:{duration:.2}
                        }}
                        transition={{
                            duration: 2,
                            times: [0, .3, .5, .7, 1],
                            delay:.5
                        }}
                        className="ball absolute left-0 rounded top-0 bg-[#baa999] w-[4vw] h-[4vw]"></motion.div>
            </motion.div>
                }
                </AnimatePresence>
            <motion.button layout onClick={e => setisVisible(!isVisible)} className='bg-neutral-300 w-max h-max px-[3vw] py-[1.2vw] text-[1.5vw]  font-semibold rounded uppercase'>show snake animation</motion.button>

        </>

    )
}

export default Basics