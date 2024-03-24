import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('TermsPage');

  return (
    <>
      <h1>{t('title')}</h1>
      {t('content')}
    </>
  );
}
