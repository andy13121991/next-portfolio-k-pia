// Import Swiper and SwiperSlide components from swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper';

// Import React icons
import { FaQuoteLeft } from 'react-icons/fa';

// Import Image component from Next.js
import Image from 'next/image';

// Import testimonials data from JSON file
import testimonialsData from '../../public/data/testimonials.json';

// Functional component for TestimonialSlider
const TestimonialSlider = () => {
  return (
    <div>
      {/* Swiper component for testimonials slider */}
      <Swiper
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[ Navigation, Pagination ]}
        className="h-[400px]"
      >
        {/* Mapping through testimonialsData to render each testimonial */}
        {testimonialsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>

                {/* Container for testimonial content */}
                <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                  <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative
                  mx-auto xl:mx-0'>
                    <div className='flex flex-col justify-center text-center'>
                      <div className='mb-2 mx-auto'>
                        <Image
                          src={person.image}
                          width={100}
                          height={100}
                          alt=''
                        />
                      </div>
                      <div className='text-lg'>
                        {person.name}
                      </div>
                      <div className='text-[12px] uppercase font-extralight tracking-widest'>
                        {person.position}
                      </div>
                    </div>
                  </div>
                  <div
                    className='flex-1 flex flex-col justify-center before:w-[1px] 
                    xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'
                  >
                    {/* Quotation icon */}
                    <div className='mb-4'>
                      <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                    </div>
                    <div className='xl:text-lg text-center md:text-left'>{ person.message }</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;