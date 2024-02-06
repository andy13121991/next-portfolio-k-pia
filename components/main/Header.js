// Importing necessary modules/components from Next.js
import Image from 'next/image';
import Link from 'next/link';

// Importing the custom NameAnimation component
import NameAnimation from './NameAnimation';

// Header component
const Header = () => {
  return (
    <header className="z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] max-lg:px-0">

      {/* Container to center the content within the header */}
      <div className='container mx-auto'>
        <div className='flex justify-between lg:flex-row items-center gap-y-6 mt-8'>
          
          {/* Left section containing the logo linked to the home page */}
          <div className='xl:w-[82%] max-lg:w-[20%]'>
            <Link
              href={'/'}
            >
              <Image
                src={'/smith3.png'}
                width={100}
                height={48}
                alt=''
                className='max-lg:w-[70%]'
                priority={true}
              />
            </Link>
          </div>
          
          {/* Right section containing the NameAnimation component */}
          <div className='xl:w-[22%] max-lg:w-[60%] flex flex-col justify-center'>
            <NameAnimation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
