import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Link } from '@/lib/navigation';

interface DrawerNavProps {
  nav: boolean;
  handleNav: () => void;
}

function DrawerNav(props: DrawerNavProps) {
  const { nav, handleNav } = props;

  return (
    <div
      className={
        nav
          ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 duration-500'
          : ''
      }
    >
      <div
        className={
          nav
            ? 'fixed bottom-0 top- w-full h-[70%] bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed bottom-[-100%] w-full left-0 p-10 h-[70%] ease-in duration-500'
        }
      >
        <div>
          <div className='flex w-full items-center justify-between'>
            <h1 className=' w-36 text-cyan-500 font-semibold text-2xl '>
              <Link href='/'>Easy Visa</Link>
            </h1>
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div>
            <ul className='py-4 flex-col'>
              <Link href='/page/about'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  About
                </li>
              </Link>
              <Link href='/page/contact-us'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Contact Us
                </li>
              </Link>
              <Link href='/page/privacy'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Privacy
                </li>
              </Link>
              <Link href='/page/terms-and-conditions'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Terms and Conditions
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerNav;
