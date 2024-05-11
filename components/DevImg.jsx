import Image from 'next/image';

const DevImg = ({ containerStyles, imageSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imageSrc} fill priority alt='' />
    </div>
  );
};

export default DevImg;
