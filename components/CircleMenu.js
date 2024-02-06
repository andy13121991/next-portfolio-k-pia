// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

// Import data for circle menu links
import circleData from '../public/data/circleData.json';

// Functional component for the CircleMenu
const CircleMenu = () => {

  // State variables to manage menu visibility and hovered link
  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // Variable for lodash.debounce to handle window resize event
  let debounce;

  // Check if window is defined (for SSR compatibility)
  if (typeof window !== 'undefined')
  {
    // Load lodash.debounce if window is defined
    debounce = require('lodash.debounce');
  }

  // Event handler for button click to toggle menu visibility
  const handleButtonClick = () => {
    setMenuVisible(!menuVisible);
  };

  // Event handler for link hover to set hovered link index
  const handleLinkHover = (index) => {
    setHoveredLink(index);
  };

  // Event handler for link leave to reset hovered link
  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  // Effect hook to handle window resize event and update window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (debounce) {

      // Debounce the resize event for better performance
      const debouncedResize = debounce(handleResize, 200);
      window.addEventListener('resize', debouncedResize);

      // Call handleResize initially and clean up event listener on component unmount
      handleResize();

      return () => {
        window.removeEventListener('resize', debouncedResize);
      };
    }
  }, [debounce]);

  return (
    <div className='relative w-full flex-1 flex flex-col gap-6 mx-auto items-center max-sm:mt-12'>

      {/* Button to toggle menu visibility */}
      <button
        className='btn rounded-full bg-[#ffa200] w-[170px] h-[170px] px-8 
          transition-all duration-300 items-center justify-center overflow-hidden
          hover:border-[#ffa200] group z-30 max-mm:w-[135px] max-mm:h-[135px]'
        onClick={handleButtonClick}
      >

        {/* Text and arrow icon for the button */}
        <span
          className='flex group-hover:translate-y-[120%] group-hover:opacity-0 text-[1.5em] text-center
          transition-all duration-300 z-50 max-mm:text-[15.2px]'
        >
          Let&rsquo;s talk
        </span>
        <BsArrowRight
          className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
          group-hover:opacity-100 transition-all duration-300 text-[52px] flex items-center
          w-full z-50'
        />
      </button>

      {/* Circle menu links */}
      <div
        className={`absolute top-8 w-24 ${menuVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-300 max-mm:top-[28px] max-mm:right-[115.2px]`}
      >
          {circleData.linkDatas.map((linkData, index) => {
            const transitionDelay = 0.1 * index;

            // Calculate dynamic styles for each link
            const dynamicStyles = {
              transform: `translateX(${Math.cos((2 * Math.PI * index) / circleData.linkDatas.length) * 200}%) 
              translateY(${Math.sin((2 * Math.PI * index) / circleData.linkDatas.length) * 200}%)`,
              transitionDelay: `${transitionDelay}s`,
            };

            // Adjust dynamicStyles based on window width
            if (windowWidth <= 1300)
            {
            dynamicStyles.transform = `translateX(${Math.cos((2 * Math.PI * index) / circleData.linkDatas.length) * 150}%) 
              translateY(${Math.sin((2 * Math.PI * index) / circleData.linkDatas.length) * 150}%)`;
            }
              
            if (windowWidth <= 400)
            {
            dynamicStyles.transform = `translateX(${Math.cos((2 * Math.PI * index) / circleData.linkDatas.length) * 170}%) 
              translateY(${Math.sin((2 * Math.PI * index) / circleData.linkDatas.length) * 170}%)`;
            }

            // Style for link hover effect
            const hoverStyle = {
              background: hoveredLink === index ? linkData.color : 'transparent',
            };

            return (
              <div
                key={index}
                style={menuVisible ? dynamicStyles : {} }
                className='z-0 absolute flex justify-center items-center 
                rounded-full transition-all duration-1000'
              >
                {/* Link with image for each circle menu item */}
                <Link
                  id={index}
                  href={linkData.linkPath}
                  style={hoverStyle}
                  target="_blank"
                  className='h-[100px] w-[100px] rounded-full flex items-center justify-center hover:scale-110
                  transition-all duration-500 border border-white/50 max-mm:w-[80px] max-mm:h-[80px]'
                  onMouseEnter={() => handleLinkHover(index)}
                  onMouseLeave={handleLinkLeave}
                >
                  <Image
                    src={linkData.imgPath}
                    alt=''
                    width={48}
                    height={48}
                  />
                </Link>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default CircleMenu;
