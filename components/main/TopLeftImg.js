import Image from 'next/image';

const TopLeftImg = () => {
  return <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[11%] xl:w-[21%] opacity-60'>
    <Image src='/steam2.jpg' width={400} height={400} alt='' />
  </div>;
};

export default TopLeftImg;
