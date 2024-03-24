import { useTranslations } from 'next-intl';

export default function VisaNationalityPage({
  params,
}: {
  params: { nationality: string };
}) {
  const t = useTranslations('VisaNationalityPage');

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
      <p>Nationality: {params.nationality}</p>
    </>
  );
}
