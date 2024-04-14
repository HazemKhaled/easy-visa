import { useTranslations } from 'next-intl';

import TermsPage from '@/app/[locale]/page/terms-and-conditions/page';

import Navbar from '../../components/Navbar/Navbar';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <Navbar />
      <TermsPage />
    </div>
  );
}
