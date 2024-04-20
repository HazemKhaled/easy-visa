import { useTranslations } from 'next-intl';

import { Link } from '@/lib/navigation';

import DrawerNav from '@/components/Header/DrawerNav';
import HeaderNav from '@/components/Header/HeaderNav';

const Header = () => {
  const t = useTranslations('Header');
  return (
    <div className='  fixed w-full h-20 flex items-center justify-between md:px-10 bg-zinc-200 shadow-lg px-5  '>
      <div>
        <h1 className=' w-36 text-cyan-500 font-semibold text-2xl '>
          <Link href='/'>{t('EasyVisa')} </Link>
        </h1>
      </div>
      <div className='md:w-full md:flex justify-center items-center hidden '>
        <HeaderNav />
      </div>
      <div className=' flex '>
        <DrawerNav>
          <HeaderNav />
        </DrawerNav>
      </div>
    </div>
  );
};

export default Header;
