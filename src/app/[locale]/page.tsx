import { useTranslations } from 'next-intl';

import Navbar from '../../components/Navbar/Navbar';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <Navbar />
      <h1>{t('title')}</h1>
      {t('content')}
    </>
  );
}
