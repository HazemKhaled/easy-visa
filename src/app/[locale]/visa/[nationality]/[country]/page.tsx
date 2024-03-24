import { useTranslations } from 'next-intl';

export default function VisaNationalityCountryPage({
  params,
}: {
  params: { nationality: string; country: string };
}) {
  const t = useTranslations('VisaNationalityCountryPage');

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
      <p>Nationality: {params.nationality}</p>
      <p>Country: {params.country}</p>
    </>
  );
}
