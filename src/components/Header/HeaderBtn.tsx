import { Link } from '@/lib/navigation';

const NavbarBtn = () => {
  return (
    <div className='flex col-span-4 gap-10 text-gray-500'>
      <Link href='/page/about'>About</Link>
      <Link href='/page/contact-us'>Contact Us</Link>
      <Link href='/page/privacy'>Privacy</Link>
      <Link href='/page/terms-and-conditions'>Terms and Condition</Link>
    </div>
  );
};

export default NavbarBtn;
