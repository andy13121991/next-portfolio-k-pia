import Image from 'next/image';

const Bulb = () => {
  return (
    <div
      className='absolute -left-30 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 
      w-[11%] xl:w-[12%]'
    >
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        className='w-full h-full'
        alt=''
      />
    </div>
  );
};

export default Bulb;
