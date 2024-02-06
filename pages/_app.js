// Import global styles
import '../styles/globals.css';

// Import Layout and Transition components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Import necessary modules from Next.js and framer-motion
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

// MyApp component function
function MyApp({ Component, pageProps }) {

  // Initialize router
  const router = useRouter();

  // Render the application layout
  return (
    <Layout>
      {/* AnimatePresence to handle page transitions */}
      <AnimatePresence mode='wait'>

        {/* Wrapper div with motion for page transitions */}
        <motion.div key={router.route} className='h-full'>

          {/* Include Transition component for animations */}
          <Transition />

          {/* Render the current page component */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
