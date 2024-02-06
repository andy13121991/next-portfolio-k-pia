// Import necessary modules and components
import { useRouter } from 'next/router';
import { Sora } from '@next/font/google'

// Define font styles using Sora font
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800' ],
})

// Import main components used in the layout
import Nav from '../components/main/Nav';
import Header from '../components/main/Header';
import TopLeftImg from '../components/main/TopLeftImg';
import WomanBg from '../components/main/WomanBg';
import Bulb from '../components/main/Bulb';

// Functional component for the main layout structure
const Layout = ({ children }) => {
  
  // Use the Next.js useRouter hook to get the current route
  const router = useRouter();
  const { pathname } = router;

  // Define routes to exclude certain components
  const routesToExclude = ['/', '/about'];

  // Conditional rendering flags based on the current route
  const renderComponent = pathname !== '/';
  const notAboutRenderComponent = !routesToExclude.includes(pathname);

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <div className='bg-primary/60 h-full max-lg:h-auto'>
        <div className='bg-gradient-to-r from-primary/10 via-black/30 to-black/20 h-full w-full 
        max-lg:h-auto'>

          {/* Render top-left image, navigation, and header components */}
          <TopLeftImg />
          <Nav />
          <Header />

          {/* Conditionally render WomanBg component based on route */}
          {renderComponent && <WomanBg />}

          {/* Conditionally render Bulb component based on route */}
          {notAboutRenderComponent && <Bulb />}

          {/* Render child components */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
