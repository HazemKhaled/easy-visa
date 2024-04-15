import { useTranslations } from 'next-intl';

import { Link } from '@/lib/navigation';

const NavbarBtn = () => {
  const t = useTranslations('Layout');

  return (
    <div className='flex col-span-4 gap-10 text-gray-500'>
      <NavBtn href='/page/about'>{t('AboutNavBtn')}</NavBtn>
      <NavBtn href='/page/contact-us'>{t('ContactUsNavBtn')}</NavBtn>
      <NavBtn href='/page/privacy'>{t('PrivacyNavBtn')}</NavBtn>
      <NavBtn href='/page/terms-and-conditions'>{t('TermsNavBtn')}</NavBtn>
    </div>
  );
};

export default NavbarBtn;

const NavBtn = ({
  href,
  children,
}: {
  href: string;
  children: string | JSX.Element;
}) => {
  return (
    <Link
      href={href}
      className='h-8 px-1 hover:text-cyan-500 rounded-lg hover:font-semibold hover:scale-105 duration-200'
    >
      {children}
    </Link>
  );
};
