import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ApplyBanner = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className=' w-full h-[350px] rounded-[40px] flex justify-between items-center px-[50px] py-[60px] bg-white mt-40 '>
      <div>
        <p className=' text-[35px] font-semibold text-gray-500 '>
          {t('ApplyForVisa')}
        </p>
        <button className=' w-44 h-14 bg-zinc-400 hover:scale-110 duration-200 mt-36 rounded-full '>
          <p className=' text-[25px] font-medium text-white '>
            {t('ApplyBtnBanner')}
          </p>
        </button>
      </div>
      <div className=''>
        <Image
          src='/assets/PassportIcon.png'
          width={320}
          height={320}
          alt=' passport icon'
        />
      </div>
    </div>
  );
};

export default ApplyBanner;
