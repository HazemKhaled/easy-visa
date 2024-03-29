'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LangSwitcher({ locales }) {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocaleChange = (locale) => {
    setCurrentLocale(locale);
    setIsDropdownOpen(false); // Close the dropdown menu after selecting a locale
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu's visibility
  };

  if (!locales || locales.length === 0) {
    return null;
  }

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
          id='dropdown-menu'
          aria-haspopup='true'
          aria-expanded={isDropdownOpen} // Set aria-expanded based on dropdown visibility
          onClick={toggleDropdown} // Toggle dropdown visibility on button click
        >
          {currentLocale}
          {/* Add dropdown icon here if needed */}
        </button>
      </div>
      {isDropdownOpen && ( // Render dropdown menu only if it's open
        <div
          className='origin-top-right absolute right-0 mt-2 w-12 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='dropdown-menu'
        >
          <div className='py-1' role='none'>
            {locales.map((locale) => (
              <Link href={`/${locale}`} key={locale}>
                <p
                  className={`block px-4 py-2 text-sm ${
                    currentLocale === locale
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => handleLocaleChange(locale)}
                >
                  {locale}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
