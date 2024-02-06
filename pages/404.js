// Import Image component from Next.js
import Image from 'next/image';

// NotFound functional component definition
const NotFound = () => {

    // Render the content for the 404 page
    return (
        <div className='flex justify-center m-12 max-lg:flex-col max-sm:-mt-12'>

            {/* Container for the skull image */}
            <div className='flex m-12 w-[25%] max-lg:w-[100%] justify-center max-lg:m-0'>

                {/* Image component for the skull image */}
                <Image
                    src={'/skull.jpeg'}
                    width={500}
                    height={500}
                    alt=''
                    className='mix-blend-color-dodge rounded-[125px] opacity-50'
                />
            </div>

            {/* Container for the text content */}
            <div className='flex flex-col m-12 justify-center items-center w-[25%] max-lg:w-[95%] max-lg:m-4
            max-lg:pb-24 max-sm:-mt-8'>
                <h3 className='flex flex-col justify-center items-center'>
                    <span className='h1 text-[3em] text-center text-orange max-xl:text-[2em] m-0'>
                        Clockwork Catastrophe!
                    </span>
                    <span className='h2 text-[2em] text-center text-accent max-xl:text-[1em]'>
                        Oops! It appears our cyber-steam-powered contraption hit a snag in the space-time continuum.
                    </span>
                </h3>
                <p className='text-center'>
                    While you wait, feel free to explore other corners of our digital workshop. And remember,
                    not all who wander are lost, but those who encounter a 404 might be onto something!
                </p>
            </div>
        </div>
    )
}

export default NotFound