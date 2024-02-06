// Import React library for creating React components
import React from 'react';

// Functional component for rendering a button in subpages navigation
const SubpagesButton = ({ data, index, itemIndex, handleBtn }) => {
    return (
        <button
            key={itemIndex}
            className={
                `${index === itemIndex && 'text-orange after:w-[100%] after:bg-[#ffa200] after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white
                after:absolute after:-bottom-1 after:left-0 z-10`}
            onClick={() => handleBtn(itemIndex, data[itemIndex].title)}
            >
            {data[itemIndex].title}
        </button>
    )
}

export default SubpagesButton