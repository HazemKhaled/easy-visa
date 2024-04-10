import Image from 'next/image';
import { useTranslations } from 'next-intl';

import AboutContent from '@/components/About/AboutContent';
import AboutImg from '@/components/About/AboutImg';
import ApplyBanner from '@/components/About/ApplyBanner';
import TitleAboutPage from '@/components/About/TitleAboutPage';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className=' w-full h-full flex justify-center py-[50px] '>
      <div className=' w-[1240px] 2xl:w-[1500px] '>
        <div className=' w-full px-4 md:px-0 md:flex justify-between items-center pt-40 '>
          <div>
            <TitleAboutPage>{t('about')}</TitleAboutPage>
            <AboutContent>{t('AboutContent')}</AboutContent>
          </div>
          <div className=' pt-4 md:pt-0 '>
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

        <div className=' w-full px-4 md:px-0 md:flex justify-between items-center pt-40 '>
          <div className=' hidden md:flex '>
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
          <div className=' pt-4 md:pt-0 flex md:hidden '>
            <AboutImg>
              <Image
                src='/assets/SpainPassport.png'
                alt='Spain flag with passport '
                width={520}
                height={363}
              />
            </AboutImg>
          </div>
        </div>

        <div className=' w-full px-4 md:px-0 md:flex justify-between items-center pt-40 '>
          <div>
            <TitleAboutPage>{t('HowItWorks')}</TitleAboutPage>
            <AboutContent>{t('HowItWorksContent')}</AboutContent>
          </div>
          <div className=' pt-4 md:pt-0 '>
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

        <div className=' w-full px-4 md:px-0 md:flex justify-between items-center pt-40 '>
          <div className=' hidden md:flex '>
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
          <div className=' pt-4 md:pt-0 flex md:hidden '>
            <AboutImg>
              <Image
                src='/assets/PassportControl.png'
                alt='Woman Controlling passports '
                width={520}
                height={363}
              />
            </AboutImg>
          </div>
        </div>

        <div className=' hidden md:flex '>
          <ApplyBanner />
        </div>
      </div>
    </div>
  );
}
