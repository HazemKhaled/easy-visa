import { Cairo } from 'next/font/google';
import { getTranslations } from 'next-intl/server';

import '../globals.css';

import Header from '@/components/Header/Header';

const cairo = Cairo({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Title'),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={cairo.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
