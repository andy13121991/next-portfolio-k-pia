// Importing React Icons for different services
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Importing necessary components from Swiper library
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';

// Data for different services, including icons, titles, and descriptions
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Empower your brand with my service.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Where creativity meets innovation',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Step into the future with my service.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Transform your message into an unforgettable story.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Catapult your website to the top.',
  },
];

// ServiceSlider component with a callback for service click
const ServiceSlider = ({ onServiceClick }) => {
  
  // Function to handle service click, invokes the callback with the clicked service title
  const handleServiceClick = (title) => {
    onServiceClick(title);
  };
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[ FreeMode, Pagination ]}
      className="h-[240px] sm:h-[340px]"
    >
      {// Mapping through service data to create Swiper slides
        serviceData.map((item, index) => {

          return (
            <SwiperSlide key={index}>
              {/* Individual service card */}
              <div
                className="bg-[#e5aa703a] h-[286px] rounded-lg px-6 py-8 flex 
                sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#e5aa707a] 
                hover:scale-105 transition-all duration-300"
                onClick={() => handleServiceClick(item.title)}
              >
                <div className="text-4xl text-orange mb-4">{ item.icon }</div>
                <div className="mb-8">
                  <div className="mb-2 text-lg">{ item.title }</div>
                  <p className="max-w-[350px] leading-normal">{ item.description }</p>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-orange transition-all 
                  duration-300" />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
