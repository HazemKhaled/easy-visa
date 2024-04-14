
import { useTranslations } from 'next-intl';

import Navbar from '../../components/Navbar/Navbar';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <Navbar />
      <h1 className=' pt-[100px] '>{t('title')} </h1>
    </div>
  );
}
