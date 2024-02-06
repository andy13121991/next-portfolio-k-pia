// Import the motion module from framer-motion library
import { motion } from 'framer-motion';

// Define animation variants for the transition effect
const transitionVariants = {

  // Initial position, not visible
  initial: {
    translateY: '0%'
  },

  // Animation position, sliding up to hide
  animate: {
    translateY: '-100%'
  },

  // Exit position, sliding down to reappear
  exit: {
    translateY: '0%'
  },
}

// Functional component for the transition effect
const Transition = () => {
  return (
    <>
      <motion.div className='w-screen h-screen absolute top-0 left-0 z-[100] bg-[#E5AA70]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
      >
      </motion.div>
    </>
  );
};

export default Transition;
