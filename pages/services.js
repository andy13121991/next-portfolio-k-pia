// Import React and useState from 'react'
import React, { useState } from 'react';

// Import MainService and ServicesSubpages components
import MainService from '../components/services/MainService';
import ServicesSubpages from '../components/services/ServicesSubpages';

// Services functional component definition
const Services = () => {

  // State hook to manage active component
  const [activeComponent, setActiveComponent] = useState('default');

  // Function to switch between components
  const switchComponent = (clickedService) => {
    setActiveComponent(clickedService);
  };

  // Function to set the default component
  const setDefaultComponent = () => {
    setActiveComponent('default');
  };

  // Render content for the Services page
  return (
    <div className='h-full py-4 max-sm:pb-60 flex items-center'>
      <div className='container mx-auto'>

        {/* Conditional rendering based on active component */}
        {activeComponent === 'default' ? (
          <MainService onServiceClick={switchComponent} />
        ) : (
          <ServicesSubpages
            backToMain={setDefaultComponent}
            activeService={activeComponent}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
