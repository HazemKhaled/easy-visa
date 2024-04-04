import { useTranslations } from 'next-intl';

import AboutPage from '@/app/[locale]/page/about/page';

import Navbar from '../../components/Navbar/Navbar';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div>
      <Navbar />
      <AboutPage />
    </div>
  );
}
