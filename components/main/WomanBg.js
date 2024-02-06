import Image from 'next/image';

const WomanBg = () => {
  return (
    <div className='w-[11%] xl:w-[16%] absolute -right-0 -bottom-0 mix-blend-color-dodge animate-pulse
    duration-75 z-10'>
      <Image
        src={'/steampunk-14.png'}
        width={260}
        height={200}
        alt=''
        className='w-full h-full'
      />
    </div>
  );
};

export default WomanBg;
