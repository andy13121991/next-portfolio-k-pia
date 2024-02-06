import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-20 max-lg:pb-20'>
      <Link 
        href={'/work'}
        className='relative w-[11em] h-[11em] flex justify-center items-center bg-circlesStar bg-cover 
        bg-center bg-no-repeat group'>
        <Image
          src={'/nothing-everything-white6.png'}
          width={141}
          height={148}
          alt=''
          className='animate-[spinner_6s_linear_infinite] w-full h-full max-w-[8.8125em] max-h-[9.25em]'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
