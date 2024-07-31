import { motion, useAnimationControls} from 'framer-motion'
import React from 'react'


const change = {
    initial: {
        borderRadius: 0
    },
    round: {
        borderRadius: "50%"
    }
}
const AnimationControls = () => {

    const control = useAnimationControls()

    const handleClick = () => {
        control.start("round")
    }

    return (
        <div className='w-max h-max relative flex gap-[2vw] items-center p-[2vw]'>
            <button onClick={handleClick} className='bg-neutral-300 w-max h-max px-[3vw] py-[1.2vw] text-[1.5vw]  font-semibold rounded uppercase'>box to circle</button>
            <motion.div
                variants={change}
                initial="initial"
                animate={control}
                className="w-[5vw] h-[5vw] bg-rose-50"></motion.div>
        </div>
    )
}

export default AnimationControls