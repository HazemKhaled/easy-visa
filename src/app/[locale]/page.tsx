import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import { listCountries } from '@/models/country';

export default async function Index() {
  const t = await getTranslations('Index');

  const countries = await listCountries();

  return (
    <>
      <h1>{t('title')}</h1>

      <Suspense>
        {countries.length === 0 ? (
          <p>There's no countries yet!</p>
        ) : (
          <ul>
            {countries?.map((country) => (
              <li key={country.code}>
                {country.name} ({country.code})
                <br /> <i>{country.Translation[0]?.text}</i>
              </li>
            ))}
          </ul>
        )}
      </Suspense>
    </>
  );
}
