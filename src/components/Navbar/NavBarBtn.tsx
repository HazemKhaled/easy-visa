import { useTranslations } from 'next-intl';

const NavbarBtn = () => {
  const t = useTranslations('Layout');

  return (
    <div className='flex col-span-4 gap-10 text-gray-500'>
      <NavBtn href='/about'>{t('AboutNavBtn')}</NavBtn>
      <NavBtn href='/contact'>{t('ContactUsNavBtn')}</NavBtn>
      <NavBtn href='/privacy'>{t('PrivacyNavBtn')}</NavBtn>
      <NavBtn href='/terms'>{t('TermsNavBtn')}</NavBtn>
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
    <a
      href={href}
      className='h-8 px-1 hover:text-cyan-500 rounded-lg hover:font-semibold hover:scale-105 duration-200'
    >
      {children}
    </a>
  );
};
