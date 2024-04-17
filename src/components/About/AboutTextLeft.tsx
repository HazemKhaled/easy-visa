import Image from 'next/image';

interface AboutTextLeftProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const AboutTextLeft: React.FC<AboutTextLeftProps> = ({
  title,
  text,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className='w-full px-4 md:px-0 md:flex justify-between items-center pt-40'>
      <div>
        <p className='text-[35px] font-semibold'>{title}</p>
        <p className='md:w-[580px] 2xl:w-[700px] text-[18px] font-normal pt-5'>
          {text}
        </p>
      </div>
      <div className='pt-4 md:pt-0'>
        <div className='w-full h-full rounded-3xl flex justify-center items-center'>
          <Image src={imageSrc} alt={imageAlt} width={501} height={353} />
        </div>
      </div>
    </div>
  );
};

export default AboutTextLeft;
