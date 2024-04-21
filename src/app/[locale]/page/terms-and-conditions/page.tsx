import { useTranslations } from 'next-intl';

const TermsPage = () => {
  const t = useTranslations('TermsPage');

  return (
    <div className=' w-full h-full flex justify-center items-start mb-20 '>
      <div className=' md:w-[1240px] pt-[140px] 2xl:w-[1500px] flex justify-center '>
        <div className=' md:w-[1000px] ml-1 '>
          <h1 className=' text-4xl font-bold '>{t('TermsAndCondition')}</h1>
          <p className='w-[360px] md:w-full mt-5 text-lg '>{t('Welcome')}</p>
          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            {t('UseOfCookies')}
          </p>

          <div className=' w-[360px] md:w-full mt-3 '>
            <p className=' '>{t('WeUseCookies')}</p>
          </div>

          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            {t('LinksToOther')}
          </p>

          <div className=' mt-3 '>
            <p className=' '>{t('OurWebsite')}</p>
          </div>

          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            {t('IntellectualProperty')}
          </p>

          <div className=' mt-3 '>
            <p className=' '>{t('AllContent')}</p>
          </div>

          <p className=' mt-5 font-semibold '>{t('Limitations')}</p>

          <p className=' w-[360px] md:w-full mt-3'>{t('WeDo')}</p>

          <p className=' mt-5 font-semibold text-red-600 '>{t('ByUsing')}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
