// Import React and necessary components/modules
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

import Image from 'next/image';

// Import custom components
import HalfCircleBar from '../components/about/HalfCircleBar';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

// Import data from JSON file
import aboutData from '../public/data/aboutData.json';
import imageAboutData from '../public/data/imageAboutData.json';

// Import additional components
import Avatar from '../components/main/Avatar';
import { fadeIn } from '../variants';
import Counter from '../components/about/Counter';
import SubpagesButton from '../components/SubpagesButton';

// About functional component definition
const About = () => {

  // State variables
  const [index, setIndex] = useState(0);
  const [btn, setBtn] = useState("skills");
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setCurrentImage] = useState(0);

  // Mapping array of images for the lightbox
  const images = imageAboutData.map((image) => ({
    src: image.src,
    w: image.w,
    h: image.h,
  }));

  // Handle button click to switch between skills, certificates and etc
  const handleBtn = (itemIndex, item) => {
    setBtn(item);
    setIndex(itemIndex);
  };
  
  // Open lightbox with specified index
  const openLightbox = (lightboxIndex) => {
    setCurrentImage(lightboxIndex);
    setLightboxIsOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  // Render content for the About page
  return (
    <div className='h-auto max-xl:py-4 py-28 text-center xl:text-left'>

      {/* Avatar displayed on larger screens */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex max-xl:hidden absolute -bottom-21 -left-[370px]'
      >
        <Avatar />
      </motion.div>

      {/* Main content container */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        {/* Left column with text content */}
        <div className='flex-1 flex flex-col justify-center max-xl:mb-32 max-lg:mb-0'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:w-[28.5vw] max-xl:text-[2em] max-mm:text-[1.5em]'
          >
            Captivating
            <span className='text-orange'> stories </span>
            birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[100%] max-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 max-mm:leading-5'
          >
            12 years ago, I began with developing. Since then, I&rsquo;ve acquired many skills,
            consulted for startups, and collaborated on digital products for business and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
          
          {/* Counter component (displayed on larger screens) */}
          <Counter />
          </motion.div>
        </div>

        {/* Right column with subpage buttons and content */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full h-[25vw] max-sm:h-[70vw] max-xl:mb-[230px] max-xl:w-[50%] max-xl:mr-24
          max-lg:w-full max-lg:mr-0'>
          
          {/* Subpage buttons */}
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 max-sm:gap-x-2'>
            { aboutData.map((item, itemIndex) => {
              return (
                <SubpagesButton
                key={itemIndex}
                data={aboutData}
                index={index}
                itemIndex={itemIndex}
                handleBtn={handleBtn}
              />
              );
            })}
          </div>

          {/* Content based on selected button */}
          <div
            className='py-2 xl:py-6 flex flex-wrap gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-auto'
          >
            {aboutData[index].info.map((item, itemIndex) => {
              
              const hasAnimation = item.anim;
              
              // Render content based on the selected button
              if (btn === "skills")
              {
                // Skills content
                return (
                  <div
                    key={ itemIndex }
                    className='flex-1 flex flex-col m-4 gap-x-2 items-center hover:scale-110 bg-white/20 p-4
                  text-white rounded-[10px] hover:bg-white/30'
                  >
                    <div className='flex font-light mb-2 md:mb-0 w-full items-center'>
                      <div className={`px-2 ${hasAnimation ? 'icon-wrapper-animate' : 'icon-wrapper'}`}>
                        <Image
                          src={item.icons}
                          alt=''
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className='uppercase w-full'>{ item.name }</div>
                    </div>
                    <div className='text-2xl xl:text-4xl font-extrabold text-orange mb-2 text-center'>
                      <div class="h-[70px] w-[166px] mt-4">
                        <HalfCircleBar skill={ item.skill } />
                      </div>
                      <div className=''>
                        <CountUp start={0} end={ item.skill } duration={5} /> %
                      </div>
                    </div>
                  </div>
                );
              }

              else if (btn === "certificates")
              {

                // Certificates content
                return (
                  <div
                    key={ itemIndex}
                    className='flex flex-wrap ml-8 mr-4 gap-x-2 items-center hover:scale-110 bg-white/20 p-4
                  text-white rounded-[10px] hover:bg-white/30 w-[200px]'
                    onClick={() => openLightbox(itemIndex)}
                  >
                    <Image width={200} height={250} src={item.src} alt={`Image ${itemIndex + 1}`} />
                  </div>
                );
              }

              else
              {
                // Other content
                return (
                  <div
                    key={ itemIndex }
                    className='flex flex-col ml-8 mr-4 gap-x-2 items-center hover:scale-110 bg-white/20 p-4
                  text-white rounded-[10px] hover:bg-white/30 w-[500px]'
                  >
                    <div className='text-center text-orange'>{item.title}</div>
                    <div className='text-center text-[#ffd200]'>{ item.desc }</div>
                    <div className='text-center'>{ item.location }</div>
                    <div className='text-center text-accent'>{item.stage}</div>
                  </div>
                );
              }
            })}
          </div>
        </motion.div>
      </div>

      {/* Lightbox for certificates */}
      {lightboxIsOpen && (
        <PhotoSwipe
          isOpen={lightboxIsOpen}
          items={images}
          options={{ index: lightboxIndex }}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default About;
