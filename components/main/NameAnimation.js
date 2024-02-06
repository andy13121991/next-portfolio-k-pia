// Importing the TypeAnimation component from 'react-type-animation'
import { TypeAnimation } from 'react-type-animation';

// NameAnimation component
const NameAnimation = () => {

  return (
    <p className='flex items-center gap-x-5 text-lg mr-4 mb-4 max-lg:mr-0 max-lg:mb-0'>

      {/* TypeAnimation component with a sequence of strings and timing configurations */}
      <TypeAnimation
        sequence={[
          'Adrian Kmeto',
          2000,
          'as',
          1000,
          'Andrew Wesley King',
          2000
        ]}
        speed={70}
        className='text-orange'
        wrapper='span'
        repeat={2}
      />
    </p>
  );
};

export default NameAnimation;
