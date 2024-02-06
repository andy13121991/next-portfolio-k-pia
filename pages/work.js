// Import WorkSlider component
import WorkSlider from '../components/work/WorkSlider';

// Import motion and fadeIn variant
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Work functional component definition
const Work = () => {

  // Render content for the Work page
  return (
    <div className='h-full py-4 max-sm:pb-48 flex items-center'>

      {/* Container for content */}
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 pb-24'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-12 max-mm:text-[1.5em]'
            >
              My Work
              <span className='text-orange'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 max-mm:leading-5'
            >
              I bring ideas to life through code and creativity.
              With a keen eye for design and a knack for user experience.
              My projects reflect a blend of innovation and precision, ensuring seamless and
              engaging digital experiences.
            </motion.p>
          </div>

          {/* WorkSlider component with fadeIn-down animation */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full xl:max-w-[65%] max-xl:max-w-[60%] max-lg:max-w-[100%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
