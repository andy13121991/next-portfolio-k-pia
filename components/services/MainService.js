// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// Importing the ServiceSlider component
import ServiceSlider from './ServiceSlider';

// MainService component with a callback for service click
const MainService = ({onServiceClick}) => {
    return (
        <div className='flex flex-col xl:flex-row gap-x-8'>
            
            {/* Left section containing title and description */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='h2 max-mm:text-[1.5em]'
            >
                My Services
                <span className='text-orange'>.</span>
            </motion.h2>
            <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='mb-4 max-w-[400px] mx-auto lg:mx-0 max-mm:leading-5'
            >
                I take pride in delivering unparalleled services tailored to meet your unique needs.
                My commitment to excellence, innovation, and customer satisfaction sets me apart in the market.
            </motion.p>
            </div>

            {/* Right section containing the ServiceSlider component */}
            <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full xl:max-w-[65%] max-xl:max-w-[60%] max-lg:max-w-[100%] pb-24'
            >
                {/* Embedding the ServiceSlider component with the provided callback */}
                <ServiceSlider onServiceClick={onServiceClick} />
            </motion.div>
        </div>
    )
}

export default MainService