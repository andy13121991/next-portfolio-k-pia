// Import dependencies
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// BackButton component with a callback for going back
const BackButton = ({backToMain}) => {
    return (
        <motion.button
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='btn w-[100px] h-[40px] border rounded-full text-accent hover:scale-110
            transition-all duration-300 group items-center justify-center px-8 z-20'
            onClick={backToMain}
        >
            {/* Text that appears when not hovered */}
            <span className='flex group-hover:translate-y-[120%] group-hover:opacity-0 text-[16px] 
            text-center transition-all duration-300 translate-y-1'>
                    Back
            </span>

            {/* Arrow icon that appears when hovered */}
            <BsArrowLeft
                className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-6
                group-hover:opacity-100 transition-all duration-300 text-[32px] flex items-center
                w-full z-50'
            />
        </motion.button>
    )
}

export default BackButton