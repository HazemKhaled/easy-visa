import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function DrawerNav(props) {
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
            <Link onClick={handleNav} href=''>
              <Image src='/assets/navLgo.png' alt='' width='100' height='50' />
            </Link>
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:[90%] py-4'>
              Lets build something legendary together
            </p>
          </div>
          <div>
            <ul className='py-4 flex-col'>
              <Link href=''>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  {' '}
                  Contact
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
