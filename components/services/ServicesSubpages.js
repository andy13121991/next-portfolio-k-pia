// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { bounceIn } from '../../variants';

// Import custom component
import BackButton from './BackButton';

// Import service descriptions from external JSON file
import serviceDescs from '../../public/data/serviceDescs.json';

const ServicesSubpages = ({ backToMain, activeService }) => {

    // Retrieve service descriptions for the active service from the JSON data
    const serviceDescriptions = serviceDescs[activeService] || [];

    return (
        <div className='flex flex-col xl:flex-row gap-x-8 items-center'>

            {/* BackButton component for navigation */}
            <BackButton backToMain={backToMain} />

            {/* Motion-div for animations */}
            <motion.div
                variants={bounceIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='flex flex-col overflow-y-auto h-[25vw] w-[70vw] max-sm:h-[100vw] mt-4 md:pb-36'>
                <h1 className='h1 text-orange'>
                    {activeService} Services
                </h1>

                {/* Render service descriptions */}
                {serviceDescriptions.map((service, index) => (
                    <div key={index}>
                        <h2 className='h2 text-[26px]'>{service.title}</h2>
                        <p className='pb-4'>{service.desc}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default ServicesSubpages