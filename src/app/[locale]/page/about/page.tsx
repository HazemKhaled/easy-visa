import Image from 'next/image';
import { useTranslations } from 'next-intl';

import AboutContent from '@/components/About/AboutContent';
import AboutImg from '@/components/About/AboutImg';
import ApplyBanner from '@/components/About/ApplyBanner';
import TitleAboutPage from '@/components/About/TitleAboutPage';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className=' w-full h-full px-[120px] py-[100px] '>
      <div className=' w-full h-full flex justify-between items-center '>
        <div>
          <TitleAboutPage>{t('about')}</TitleAboutPage>
          <AboutContent>{t('AboutContent')}</AboutContent>
        </div>
        <div>
          <AboutImg>
            <Image
              src='/assets/Passport.png'
              alt='Two passports with world map background '
              width={501}
              height={353}
            />
          </AboutImg>
        </div>
      </div>

      <div className=' w-full h-full flex justify-between items-center pt-40 '>
        <div>
          <AboutImg>
            <Image
              src='/assets/SpainPassport.png'
              alt='Spain flag with passport '
              width={520}
              height={363}
            />
          </AboutImg>
        </div>
        <div>
          <TitleAboutPage>{t('ourMission')}</TitleAboutPage>
          <AboutContent>{t('MissionContent')}</AboutContent>
        </div>
      </div>

      <div className=' w-full h-full flex justify-between items-center pt-40 '>
        <div>
          <TitleAboutPage>{t('HowItWorks')}</TitleAboutPage>
          <AboutContent>{t('HowItWorksContent')}</AboutContent>
        </div>
        <div>
          <AboutImg>
            <Image
              src='/assets/GirlPassport.png'
              alt='Entering Passport Information '
              width={501}
              height={353}
            />
          </AboutImg>
        </div>
      </div>

      <div className=' w-full h-full flex justify-between items-center pt-40 '>
        <div>
          <AboutImg>
            <Image
              src='/assets/PassportControl.png'
              alt='Woman Controlling passports '
              width={520}
              height={363}
            />
          </AboutImg>
        </div>
        <div>
          <TitleAboutPage>{t('OurCommitment')}</TitleAboutPage>
          <AboutContent>{t('OurCommitmentContent')}</AboutContent>
        </div>
      </div>

      <ApplyBanner />
    </div>
  );
}
