import AboutPage from '@/app/[locale]/page/about/page';

import Navbar from '../../components/Navbar/Navbar';

export default function Index() {
  return (
    <div>
      <Navbar />
      <AboutPage />
    </div>
  );
}
