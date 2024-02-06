// icons
import {
  FaBriefcase,
  FaCommentDots,
  FaMicrochip,
  FaUser,
  FaHouseChimney,
  FaHandshake
} from "react-icons/fa6";

// Import dependencies
import Link from 'next/link';
import { useRouter } from 'next/router';

// Navigation data containing name, path, and icon for each link
export const navData = [
  {
    name: 'home',
    path: '/',
    icon: <FaHouseChimney />,
  },
  {
    name: 'about',
    path: '/about',
    icon: <FaUser />,
  },
  {
    name: 'services',
    path: '/services',
    icon: <FaMicrochip />,
  },
  {
    name: 'work',
    path: '/work',
    icon: <FaBriefcase />,
  },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <FaCommentDots />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <FaHandshake />,
  },
];

// Nav component
const Nav = () => {

  // Accessing the Next.js router
  const router = useRouter();

  // Current pathname
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center h-max bottom-0 gap-y-4 
    fixed mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* Inner container */}
      <div
        className='flex w-full xl:flex-col items-center justify-between
        xl:justify-center xl:gap-y-10 px-4 md:px-40 xl:px-0 xl:h-max py-8 bg-slate-700 backdrop-blur-sm
        text-3xl xl:text-xl xl:rounded-full custom-nav'
      >
        <div className='w-[0px] h-[340px] bg-slate-800 rounded-l-[5px] absolute right-[63px] transition-all 
        duration-200 custom-drawer'></div>

        {/* Iterating through navigation links */}
        {navData.map((link, index) => {
          return (
            <Link
              className={`${ link.path === pathname && 'text-orange'}
              relative flex items-center group hover:text-orange transition-all duration-300`}
              href={ link.path }
              key={index}
              prefetch
            >
              {/*tooltip*/}
              <div className='absolute pr-14 right-[45px] rounded-[3px] w-[120px] hidden hover:bg-white/10 
              transition-all duration-300 custom-draw'>
                <div className='relative flex text-white p-[10px] hover:text-orange custom-text 
                transition-all duration-300'>
                  <div className={`${link.path === pathname && 'text-orange'} text-[12px] leading-none 
                  font-semibold capitalize`}>{link.name}</div>
                </div>
              </div>

              {/*icon*/}
              <div className={`${ link.path != pathname && 'icon-wrapper-animate'}`}>
                { link.icon }
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
