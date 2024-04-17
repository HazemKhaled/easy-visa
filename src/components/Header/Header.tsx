import { Link } from '@/lib/navigation';

import DrawerNav from '@/components/Header/DrawerNav';
import HeaderNav from '@/components/Header/HeaderNav';

const Header = () => {
  return (
    <div className=' fixed w-full h-20 flex items-center justify-between md:px-10 bg-zinc-200 shadow-lg px-5 '>
      <div>
        <h1 className=' w-36 text-cyan-500 font-semibold text-2xl '>
          <Link href='/'>Easy Visa</Link>
        </h1>
      </div>
      <div className='md:w-full w-48 mr-8 overflow-x-scroll md:overflow-x-hidden md:flex justify-start md:justify-center items-center hidden '>
        <HeaderNav />
      </div>
      <DrawerNav>
        <HeaderNav />
      </DrawerNav>
    </div>
  );
};

export default Header;
