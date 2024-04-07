import LangSwitcher from '@/components/Navbar/LangSwitcher';
import NavbarBtn from '@/components/Navbar/NavBarBtn';

import Logo from './Logo';

const Navbar = () => {
  return (
    <div className=' fixed w-full h-20 flex items-center justify-between px-10 bg-zinc-200 shadow-lg '>
      <div>
        <Logo />
      </div>
      <div className='w-full flex justify-center items-center '>
        <NavbarBtn />
      </div>
      <div>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
