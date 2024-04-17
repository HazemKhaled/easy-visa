import { useTranslations } from 'next-intl';

import { Link } from '@/lib/navigation';

import LocaleSwitcher from '@/components/Header/LocaleSwitcher';

export default function NavbarNav() {
  const t = useTranslations('Layout');

  return (
    <div className='flex col-span-4 gap-10 text-gray-500'>
      <Link href='/page/about'>{t('AboutNavBtn')}</Link>
      <Link href='/page/contact-us'>{t('ContactUsNavBtn')}</Link>
      <Link href='/page/privacy'>{t('PrivacyNavBtn')}</Link>
      <Link href='/page/terms-and-conditions'>{t('TermsNavBtn')}</Link>

      <LocaleSwitcher />
    </div>
  );
}
