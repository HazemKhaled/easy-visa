import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPage');

  return (
    <>
      <h1>{t('title')}</h1>
      {t('content')}
    </>
  );
}
