import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <>
      <h1>{t('title')}</h1>
      {t('content')}
    </>
  );
}
