// Import necessary modules and components
import React, { useState } from 'react';
import Image from 'next/image';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

// Import PhotoSwipe component and its styles
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

// Import SubpagesButton, RedirectionButton, ExternalLink components
import SubpagesButton from '../SubpagesButton';
import RedirectionButton from './RedirectionButton';
import ExternalLink from './ExternalLink';

// Import work and image data
import workData from '../../public/data/workData.json';
import imageData from '../../public/data/imageData.json';

// Functional component for the WorkSlider
const WorkSlider = () => {

  // State variables for button, index, lightbox visibility, and lightbox index
  const [index, setIndex] = useState(0);
  const [btn, setBtn] = useState("webs");
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setCurrentImage] = useState(0);

  // Create an array of images for the PhotoSwipe component
  const images = imageData.map((image) => ({
    id: image.id,
    src: image.src,
    w: image.w,
    h: image.h,
  }));

  // Event handler for button click to set button and index
  const handleBtn = (itemIndex, item) => {
    setBtn(item);
    setIndex(itemIndex);
  };

  // Event handler to open the lightbox at a specific image index
  const openLightbox = (imageIndex) => {
    setCurrentImage(imageIndex);
    setLightboxIsOpen(true);
  };

  // Event handler to close the lightbox
  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div className=''>
      {/* Buttons for different work categories */}
      <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
        {
          workData.map((item, itemIndex) => {
            return (
              <SubpagesButton
                key={itemIndex}
                data={workData}
                index={index}
                itemIndex={itemIndex}
                handleBtn={handleBtn}
              />
            );
          })
        }
      </div>

      {/* Swiper component for the work slides */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[ Pagination ]}
        className="h-[280px] sm:h-[480px] max-sm:h-[250px]"
      >
        {/* Swiper slides for each work item */}
        { workData[index].slides.map((slide, itemIndex) => {
            return (
              <SwiperSlide key={itemIndex}>

                {/* Grid for displaying images in the slide */}
                <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>

                  {/* Map through images in the slide */}
                  {slide.images.map((image, index) => {

                    const imageIndex = image.id;

                    // Check if the image has no link (Coming soon)
                    if (image.link == '')
                    {
                      return (
                        <div
                          key={index}
                          className='relative rounded-lg overflow-hidden flex items-center justify-center group 
                          h-[210px] max-lg:h-[70%] bg-white/20'
                        >
                          <h1 className='flex items-center justify-center relative overflow-hidden group'>
                            Coming soon
                          </h1>
                        </div>
                      );
                    }

                    else
                    {

                      if (btn === 'creativity')
                      {
                        // Render different components based on the selected
                        return (
                          <div
                            key={imageIndex}
                            className='relative rounded-lg overflow-hidden flex items-center justify-center group 
                            h-[210px] max-sm:h-[110px]'
                            onClick={() => openLightbox(imageIndex)}
                          >
                            {/* Render RedirectionButton and Image for 'creativity' category */}
                            <RedirectionButton btn={btn} />
                            <div className='flex items-center justify-center relative overflow-hidden group'>
                              <Image
                                src={image.path}
                                width={500}
                                height={300}
                                alt={`Image ${imageIndex}`}
                                className='group-hover:scale-125 transition-all duration-500'
                              />
                              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
                              duration-300'></div>
                            </div>
                          </div>
                        );
                      }

                      //Render ExternalLink component for other categories
                      else
                      {
                        return (

                          <ExternalLink
                            key={index}
                            index={index}
                            image={image}
                            btn={btn}
                          />
                        );
                      }
                    }
                  })}
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>

      {/* Render PhotoSwipe component when lightbox is open */}
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

export default WorkSlider;

