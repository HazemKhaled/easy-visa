import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import prisma from '@/lib/prisma';

export default async function Index() {
  const t = await getTranslations('Index');

  const countries = await getCountries();

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

async function getCountries() {
  return prisma.country.findMany({
    include: {
      Translation: {
        where: {
          lang: 'AR',
        },
        select: {
          text: true,
        },
      },
    },
  });
}
