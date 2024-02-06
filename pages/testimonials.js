// Import TestimonialSlider component
import TestimonialSlider from "../components/testimonials/TestimonialSlider";

// Import motion and fadeIn variant
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Testimonials functional component definition
const Testimonials = () => {

  // Render content for the Testimonials page
  return (
    <div className="h-full py-32 text-center max-sm:-mt-32 max-sm:pb-[17em]">
      
      {/* Container for content */}
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0 max-mm:text-[1.5em]"
        >
          What clients <span className="text-orange">say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
