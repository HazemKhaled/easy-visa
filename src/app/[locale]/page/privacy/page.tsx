import { useTranslations } from 'next-intl';

const PrivacyPage = () => {
  const t = useTranslations('PrivacyPage');

  return (
    <div className=' w-full h-full flex justify-center items-start mb-20 '>
      <div className=' md:w-[1240px] pt-[140px] 2xl:w-[1500px] flex justify-center '>
        <div className=' md:w-[1000px] ml-1 '>
          <h1 className=' text-4xl font-bold '>{t('PrivacyPolicy')}</h1>
          <p className='w-[360px] md:w-full mt-5 text-lg '>{t('Welcome')}</p>
          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            {t('InformationWeCollect')}
          </p>

          <div className=' w-[360px] md:w-full mt-3 '>
            <li className=' '>{t('PersonalInformation')}</li>
            <li className=' mt-3 '>{t('UsageInformation')}</li>
            <li className=' mt-3 '>{t('DeviceInformation')}</li>
          </div>

          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            {t('HowWeUse')}
          </p>

          <div className=' mt-3 '>
            <li className=' '>{t('ProvideAndMaintain')}</li>
            <li className=' mt-3 '>{t('Personalize')}</li>
            <li className=' mt-3 '>{t('Communicate')}</li>
            <li className=' mt-3 '>{t('AnalyzeUsage')}</li>
            <li className=' mt-3 '>{t('ComplyWith')}</li>
          </div>

          <p className=' mt-5 font-semibold '>{t('DataSecurity')}</p>

          <p className=' w-[360px] md:w-full mt-3'>{t('WeTakeData')}</p>

          <p className=' mt-5 font-semibold '>{t('ThirdParty')} </p>

          <p className=' w-[360px] md:w-full mt-3'>{t('WeMayUse')}</p>

          <p className=' mt-5 font-semibold '>{t('YourChoices')} </p>

          <p className=' w-[360px] md:w-full mt-3'>{t('YouMayChoose')}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
