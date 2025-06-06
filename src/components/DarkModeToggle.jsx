import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className='fixed bottom-5 right-5 z-50 bg-gray-300 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition'
      aria-label='Toggle Dark Mode'
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
