// Importing the 'react-countup' library
import CountUp from 'react-countup';

// Importing countData from external JSON file
import countData from '../../public/data/countData.json';

// Counter component
const Counter = () => {

    // Rendering the counter grid using data from countData
    return (
        <div className='flex flex-1 xl:gap-x-6'>
            {countData.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='counter-grid'
                    >
                        {/* Displaying the count with a CountUp animation */}
                        <div className='text-2xl xl:text-4xl font-extrabold text-orange mb-2 custom'>
                            <CountUp start={0} end={item.countNum} duration={5} /> +
                        </div>
                        <div
                            className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'
                        >
                            {item.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Counter;
