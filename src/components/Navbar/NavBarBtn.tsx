import { useTranslations } from 'next-intl';

const NavbarBtn = () => {
  const t = useTranslations('Layout');

  return (
    <div className=' flex col-span-4 gap-10 text-gray-500 '>
      <NavBtn>
        <a href=''>{t('AboutNavBtn')}</a>
      </NavBtn>
      <NavBtn>{t('ContactUsNavBtn')}</NavBtn>
      <NavBtn>{t('PrivacyNavBtn')}</NavBtn>
      <NavBtn>{t('TermsNavBtn')}</NavBtn>
    </div>
  );
};

export default NavbarBtn;

const NavBtn = ({ children }: { children: string | JSX.Element }) => {
  return (
    <button className=' h-8 px-1 hover:text-cyan-500 rounded-lg hover:font-semibold hover:scale-105 duration-200'>
      {children}
    </button>
  );
};
