import { useTranslations } from 'next-intl';

export default function VisitCountryNationalityPage({
  params,
}: {
  params: { country: string; nationality: string };
}) {
  const t = useTranslations('VisitCountryNationalityPage');

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
      <p>Country: {params.country}</p>
      <p>Nationality: {params.nationality}</p>
    </>
  );
}
