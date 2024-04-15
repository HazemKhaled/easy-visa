import React from 'react';

import { Link } from '@/lib/navigation';

const Logo = () => {
  return (
    <div>
      <h1 className=' w-36 text-cyan-500 font-semibold text-xl '>
        <Link href='/'>Easy Visa</Link>
      </h1>
    </div>
  );
};

export default Logo;
