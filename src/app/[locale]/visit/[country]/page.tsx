import { useTranslations } from 'next-intl';

export default function VisitCountryPage({
  params,
}: {
  params: { country: string };
}) {
  const t = useTranslations('VisitCountryPage');

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
      <p>{params.country}</p>
    </>
  );
}
