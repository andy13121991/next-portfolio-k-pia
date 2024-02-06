// Import motion and fadeIn variant
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Import CircleMenu component
import CircleMenu from '../components/CircleMenu';

// Contact functional component definition
const Contact = () => {

  // Render content for the Contact page
  return (
    <div className='h-full max-sm:pb-16'>
      <div className='container mx-auto text-center xl:text-left flex justify-center h-full'>

        {/* Main content column */}
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-4 max-mm:text-[1.5em]'
          >
            Let&rsquo;s <span className='text-orange'>connect.</span>
          </motion.h2>

          {/* CircleMenu component for interactive contact options */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex h-full w-full justify-center mt-4 pt-32 pb-80 max-xl:pt-20 xl:items-center'
          >
            <CircleMenu />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
