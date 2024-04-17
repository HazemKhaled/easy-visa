'use client';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { Link } from '@/lib/navigation';

import DrawerNav from '@/components/Header/DrawerNav';
import HeaderBtn from '@/components/Header/HeaderBtn';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=' fixed w-full h-20 flex items-center justify-between md:px-10 bg-zinc-200 shadow-lg px-5 '>
      <div>
        <h1 className=' w-36 text-cyan-500 font-semibold text-2xl '>
          <Link href='/'>Easy Visa</Link>
        </h1>
      </div>
      <DrawerNav nav={nav} handleNav={handleNav} />
      <div className='md:w-full w-48 mr-8 overflow-x-scroll md:overflow-x-hidden md:flex justify-start md:justify-center items-center hidden '>
        <HeaderBtn />
      </div>
      <div onClick={handleNav} className=' md:hidden'>
        <AiOutlineMenu size={25} />
      </div>
    </div>
  );
};

export default Navbar;
