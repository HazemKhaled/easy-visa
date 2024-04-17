import { useLocale, useTranslations } from 'next-intl';

import { locales } from '@/lib/navigation';

import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('Label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('Locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
