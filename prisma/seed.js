// Generate seed data for countries, visas, residence permits, and visa options
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo, Democratic Republic of the', code: 'CD' },
    { name: 'Congo, Republic of the', code: 'CG' },
    { name: 'Costa Rica', code: 'CR' },
    { name: "Cote d'Ivoire", code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'East Timor', code: 'TL' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Eswatini', code: 'SZ' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Greece', code: 'GR' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, North', code: 'KP' },
    { name: 'Korea, South', code: 'KR' },
    { name: 'Kosovo', code: 'XK' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Laos', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia', code: 'FM' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'North Macedonia', code: 'MK' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestine', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Sudan', code: 'SS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syria', code: 'SY' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Vatican City', code: 'VA' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
  ];

  for (let country of countries) {
    await prisma.country.create({
      data: country,
    });
  }

  // seed visas data
  const visas = [
    {
      name: 'US Visa',
      description: 'A US visa is required for all visitors.',
    },
    {
      name: 'Schengen Visa',
      description: 'A Schengen visa is required for all visitors.',
    },
    {
      name: 'Australia Visa',
      description: 'A Australia visa is required for all visitors.',
    },
    {
      name: 'UK Visa',
      description: 'A UK visa is required for all visitors.',
    },
  ];

  for (let visa of visas) {
    await prisma.visa.create({
      data: visa,
    });
  }

  // seed residence permits data
  const residencePermits = [
    {
      name: 'US Residence Permit',
      description: 'Any kind of US residence permit example: Green Card, etc.',
    },
    {
      name: 'Schengen Residence Permit',
      description:
        'Any kind of Schengen residence permit example: Blue Card, etc.',
    },
    {
      name: 'Australia Residence Permit',
      description:
        'Any kind of Australia residence permit example: Permanent Resident, etc.',
    },
    {
      name: 'GCC Residence Permit',
      description:
        'Any kind of GCC residence permit example: Iqama, UAE Golden Visa, etc.',
    },
  ];

  for (let residencePermit of residencePermits) {
    await prisma.residency.create({
      data: residencePermit,
    });
  }

  // see countries translations
  const countriesTranslations = [
    { countryCode: 'AE', lang: 'AR', text: 'الإمارات العربية المتحدة' },
    { countryCode: 'AR', lang: 'AR', text: 'الأرجنتين' },
    { countryCode: 'AT', lang: 'AR', text: 'النمسا' },
    { countryCode: 'AU', lang: 'AR', text: 'أستراليا' },
    { countryCode: 'BD', lang: 'AR', text: 'بنغلاديش' },
    { countryCode: 'BE', lang: 'AR', text: 'بلجيكا' },
    { countryCode: 'BR', lang: 'AR', text: 'البرازيل' },
    { countryCode: 'CA', lang: 'AR', text: 'كندا' },
    { countryCode: 'CH', lang: 'AR', text: 'سويسرا' },
    { countryCode: 'CL', lang: 'AR', text: 'تشيلي' },
    { countryCode: 'CN', lang: 'AR', text: 'الصين' },
    { countryCode: 'CO', lang: 'AR', text: 'كولومبيا' },
    { countryCode: 'CZ', lang: 'AR', text: 'جمهورية التشيك' },
    { countryCode: 'DE', lang: 'AR', text: 'ألمانيا' },
    { countryCode: 'DK', lang: 'AR', text: 'الدنمارك' },
    { countryCode: 'DZ', lang: 'AR', text: 'الجزائر' },
    { countryCode: 'EG', lang: 'AR', text: 'مصر' },
    { countryCode: 'ES', lang: 'AR', text: 'إسبانيا' },
    { countryCode: 'FI', lang: 'AR', text: 'فنلندا' },
    { countryCode: 'FR', lang: 'AR', text: 'فرنسا' },
    { countryCode: 'GB', lang: 'AR', text: 'المملكة المتحدة' },
    { countryCode: 'GR', lang: 'AR', text: 'اليونان' },
    { countryCode: 'HU', lang: 'AR', text: 'المجر' },
    { countryCode: 'ID', lang: 'AR', text: 'إندونيسيا' },
    { countryCode: 'IE', lang: 'AR', text: 'أيرلندا' },
    { countryCode: 'IL', lang: 'AR', text: 'إسرائيل' },
    { countryCode: 'IN', lang: 'AR', text: 'الهند' },
    { countryCode: 'IT', lang: 'AR', text: 'إيطاليا' },
    { countryCode: 'JP', lang: 'AR', text: 'اليابان' },
    { countryCode: 'MA', lang: 'AR', text: 'المغرب' },
    { countryCode: 'MX', lang: 'AR', text: 'المكسيك' },
    { countryCode: 'MY', lang: 'AR', text: 'ماليزيا' },
    { countryCode: 'NG', lang: 'AR', text: 'نيجيريا' },
    { countryCode: 'NL', lang: 'AR', text: 'هولندا' },
    { countryCode: 'NO', lang: 'AR', text: 'النرويج' },
    { countryCode: 'PH', lang: 'AR', text: 'الفلبين' },
    { countryCode: 'PK', lang: 'AR', text: 'باكستان' },
    { countryCode: 'PL', lang: 'AR', text: 'بولندا' },
    { countryCode: 'PT', lang: 'AR', text: 'البرتغال' },
    { countryCode: 'QA', lang: 'AR', text: 'قطر' },
    { countryCode: 'RO', lang: 'AR', text: 'رومانيا' },
    { countryCode: 'RU', lang: 'AR', text: 'روسيا' },
    { countryCode: 'SA', lang: 'AR', text: 'المملكة العربية السعودية' },
    { countryCode: 'SE', lang: 'AR', text: 'السويد' },
    { countryCode: 'TH', lang: 'AR', text: 'تايلاند' },
    { countryCode: 'TN', lang: 'AR', text: 'تونس' },
    { countryCode: 'TR', lang: 'AR', text: 'تركيا' },
    { countryCode: 'UA', lang: 'AR', text: 'أوكرانيا' },
    { countryCode: 'US', lang: 'AR', text: 'الولايات المتحدة الأمريكية' },
    { countryCode: 'VE', lang: 'AR', text: 'فنزويلا' },
    { countryCode: 'VN', lang: 'AR', text: 'فيتنام' },
    { countryCode: 'ZA', lang: 'AR', text: 'جنوب أفريقيا' },
  ];

  for (let countryTranslation of countriesTranslations) {
    await prisma.translation.create({
      data: countryTranslation,
    });
  }

  // seed 100 visa options data, countryCode and passportCountryCode are required, countryCode and passportCountryCode must be different, properties countryCode, passportCountryCode, name, description, maxStay, and validity
  const visaOptions = [
    // seed more data with countryCode AE, TR and SA and passportCountryCode EG, JO and SY
    {
      countryCode: 'AE',
      passportCountryCode: 'EG',
      name: 'Tourist Visa',
      description: 'Long term tourist visa, one entry with 90 days stay.',
      maxStay: 90,
      validity: 180,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'EG',
      name: 'Transit Visa',
      description: 'Transit visa, one entry with 96 hours stay.',
      maxStay: 4,
      validity: 14,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'EG',
      name: '48-hours Transit Visa',
      description: 'Transit visa, one entry with 48 hours stay.',
      maxStay: 2,
      validity: 14,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'JO',
      name: 'Tourist Visa',
      description: 'Long term tourist visa, one entry with 90 days stay.',
      maxStay: 90,
      validity: 180,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'JO',
      name: 'Transit Visa',
      description: 'Transit visa, one entry with 96 hours stay.',
      maxStay: 4,
      validity: 14,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'JO',
      name: '48-hours Transit Visa',
      description: 'Transit visa, one entry with 48 hours stay.',
      maxStay: 2,
      validity: 14,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'SY',
      name: 'Tourist Visa',
      description: 'Long term tourist visa, one entry with 90 days stay.',
      maxStay: 90,
      validity: 180,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'SY',
      name: 'Transit Visa',
      description: 'Transit visa, one entry with 96 hours stay.',
      maxStay: 4,
      validity: 14,
    },
    {
      countryCode: 'AE',
      passportCountryCode: 'JO',
      name: '48-hours Transit Visa',
      description: 'Transit visa, one entry with 48 hours stay.',
      maxStay: 2,
      validity: 14,
    },
  ];

  for (let visaOption of visaOptions) {
    await prisma.visaOption.create({
      data: visaOption,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
