import { useTranslations } from 'next-intl';

import AboutTextLeft from '@/components/About/AboutTextLeft';
import AboutTextRight from '@/components/About/AboutTextRight';
import ApplyBanner from '@/components/About/ApplyBanner';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className=' w-full h-full flex justify-center py-[50px] '>
      <div className=' w-[1240px] 2xl:w-[1500px] '>
        <AboutTextLeft
          title={t('About')}
          text={t('AboutContent')}
          imageSrc='/assets/Passport.png'
          imageAlt='Two passports with world map background'
        />
        <AboutTextRight
          title={t('OurMission')}
          text={t('MissionContent')}
          imageSrc='/assets/SpainPassport.png'
          imageAlt='Spain flag with passport'
        />
        <AboutTextLeft
          title={t('HowItWorks')}
          text={t('HowItWorksContent')}
          imageSrc='/assets/GirlPassport.png'
          imageAlt='Entering Passport Information'
        />
        <AboutTextRight
          title={t('OurCommitment')}
          text={t('OurCommitmentContent')}
          imageSrc='/assets/PassportControl.png'
          imageAlt='Woman Controlling passports'
        />

        <div className=' hidden md:flex '>
          <ApplyBanner />
        </div>
      </div>
    </div>
  );
}
