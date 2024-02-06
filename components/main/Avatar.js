// Importing necessary modules/components from React and Next.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Array of image sources for the avatar
const imageSources = [
  '/andy13.png',
  '/andysteam21.png',
  '/andysteam13.png'
];

// Avatar component
const Avatar = () => {

  // State variables for image source, image index, and transitioning state
  const [imageSource, setImageSource] = useState('/andy13.png');
  const [imageIndex, setImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // useEffect to handle the image transition and change at regular intervals
  useEffect(() => {

    // Set up an interval to change the image every 5000 milliseconds (5 seconds)
    const intervalId = setInterval(() => {

      // Set transitioning state to true
      setIsTransitioning(true);

      // After a small delay, set transitioning state to false and change the image index
      setTimeout(() => {

        setIsTransitioning(false);
        setImageIndex(prevIndex => (prevIndex + 1) % imageSources.length);
      }, 500); // Transition duration + a small delay before changing the image
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, );

 // Empty dependency array ensures the effect runs only once when the component mounts

  // useEffect to update the image source based on the image index and sources
  useEffect(() => {
    setImageSource(imageSources[imageIndex]);
  }, [imageIndex]);

  // Render the Image component with dynamic styling based on transitioning state
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={imageSource}
        width={737}
        height={678}
        alt=''
        className={`translate-z-0 w-full h-full img-src ${isTransitioning ? 'transitioning' : ''}`}
      />
    </div>
  );
};

export default Avatar;
