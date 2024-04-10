import LangSwitcher from '@/components/Navbar/LangSwitcher';
import NavbarBtn from '@/components/Navbar/NavBarBtn';

import Logo from './Logo';

const Navbar = () => {
  return (
    <div className=' fixed w-full h-20 flex items-center justify-between md:px-10 bg-zinc-200 shadow-lg px-2 '>
      <div>
        <Logo />
      </div>
      <div className='md:w-full w-48 mr-8 overflow-x-scroll md:overflow-x-hidden flex justify-start md:justify-center items-center '>
        <NavbarBtn />
      </div>
      <div>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
