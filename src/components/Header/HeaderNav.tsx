import { useTranslations } from 'next-intl';

import { Link } from '@/lib/navigation';

import LocaleSwitcher from '@/components/Header/LocaleSwitcher';

export default function NavbarNav() {
  const t = useTranslations('Layout');

  return (
    <div className='md:flex md:items-center md:col-span-4 md:gap-10 text-gray-500 text-[17px] pt-5 md:pt-0 '>
      <div className=' mb-2 md:mb-0 '>
        <Link href='/page/about'>{t('AboutNavBtn')}</Link>
      </div>
      <div className=' mb-2 md:mb-0 '>
        <Link href='/page/contact-us'>{t('ContactUsNavBtn')}</Link>
      </div>
      <div className=' mb-2 md:mb-0 '>
        <Link href='/page/privacy'>{t('PrivacyNavBtn')}</Link>
      </div>
      <div className=' mb-2 md:mb-0 '>
        <Link href='/page/terms-and-conditions'>{t('TermsNavBtn')}</Link>
      </div>
      <LocaleSwitcher />
    </div>
  );
}
