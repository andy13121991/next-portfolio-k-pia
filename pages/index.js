// Import necessary components and modules
import ParticlesContainer from '../components/home/ParticlesContainer';
import ProjectsBtn from '../components/home/ProjectsBtn';
import Avatar from '../components/main/Avatar';

// Import TypeAnimation from 'react-type-animation'
import { TypeAnimation } from 'react-type-animation';

// Import motion and variants
import { motion } from 'framer-motion';
import { fadeIn, bounceIn, zoomInDown } from '../variants';

// Home functional component definition
const Home = () => {

  // Function to handle animation completion
  const onAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // Render content for the Home page
  return (
    <div className='w-full h-full max-lg:h-auto max-sm:pb-[16em] max-sm:pt-12'>

      {/* Main content container */}
      <div className='text-center flex flex-col justify-center xl:pt-0 xl:text-left h-full container mx-auto
      max-lg:pt-8'>
        <motion.h1
          variants={zoomInDown(0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          onAnimationComplete={onAnimationComplete}
          className='h1 mb-4'
        >
          Transforming Ideas<br /> Into
          <span className='text-orange'> Digital Reality</span>
        </motion.h1>
        <motion.p
          variants={bounceIn('down', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 max-xl:mb-0 text-[1.5em]'
        >
          <span className='mr-4'>I am</span>
          <TypeAnimation
            sequence={[
              'a Developer',
              2000,
              'a Designer',
              2000,
              'an Investor',
              2000
            ]}
            speed={70}
            className='text-orange'
            wrapper='span'
            repeat={Infinity}
          />
          <span>.</span>
        </motion.p>

        {/* ProjectsBtn component for project navigation */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn />
        </div>

        {/* ProjectsBtn component with fadeIn animation (visible on larger screens) */}
        <motion.div
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex'
        >
          <ProjectsBtn />
        </motion.div>
      </div>
      <div className='w-[62.5vw] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>

        {/* ParticlesContainer component for particle effects */}
        <ParticlesContainer />

        {/* Avatar component with fadeIn-up animation */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[55%] max-h-[40vw] absolute -bottom-32 lg:bottom-0 lg:right-[8%] 
          max-sm:-bottom-[40%] max-sm:right-0'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
