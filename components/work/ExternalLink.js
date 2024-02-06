// Import React, Next.js components, and the RedirectionButton component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import RedirectionButton from './RedirectionButton';

// Functional component for ExternalLink
const ExternalLink = ({ index, image, btn }) => {
    return (
        <Link
            key={index}
            href={image.link}
            target='_blank'
            passHref={true}
            className='relative rounded-lg overflow-hidden flex items-center justify-center group 
            h-[210px] max-sm:h-[110px]'
        >
            {/* RedirectionButton component for showing redirection text and arrow */}
            <RedirectionButton btn={btn} />
            <div className='flex items-center justify-center relative overflow-hidden group'>
                <Image
                src={image.path}
                width={500}
                height={300}
                alt=''
                className='group-hover:scale-125 transition-all duration-500'
                />
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
                duration-300'></div>
            </div>
        </Link>
    )
}

export default ExternalLink