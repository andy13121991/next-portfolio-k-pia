// Import React and the right arrow icon from react-icons
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

// Functional component for the RedirectionButton
const RedirectionButton = ({ btn }) => {

    // Get the selected button from the prop
    const selectedBtn = btn;
    
    return (
        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
        group-hover:xl:-translate-y-20 transition-all duration-300 z-50'
        >
            {/* Container for the text and arrow icon */}
            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                <div className='delay-100'>
                LIVE
                </div>

                {/* Conditionally render 'SHOW' or 'PROJECT' based on the selected button */}
                {selectedBtn === 'propagation' || selectedBtn === 'creativity' ? (
                    <div className='translate-y-[500%] group-hover:translate-y-0
                        transition-all duration-300 delay-150'>
                        SHOW
                    </div>
                    ) : (
                    <div className='translate-y-[500%] group-hover:translate-y-0
                        transition-all duration-300 delay-150'>
                        PROJECT
                    </div>
                )}
                {/* Render the right arrow icon */}
                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                duration-300 delay-200'>
                <BsArrowRight />
                </div>
            </div>
        </div>
    )
}

export default RedirectionButton