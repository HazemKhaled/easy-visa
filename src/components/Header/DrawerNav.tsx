'use client';
import { ReactNode, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { Link } from '@/lib/navigation';

type Props = {
  children: ReactNode;
};

export default function DrawerNav({ children }: Props) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AiOutlineMenu onClick={handleNav} size={25} className='md:hidden' />
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
              <ul className='py-4 flex-col' onClick={handleNav}>
                {children}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
