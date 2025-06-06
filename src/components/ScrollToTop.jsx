import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      className='fixed bottom-5 left-5 z-50 bg-gray-300 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition'
      aria-label='Scroll to Top'
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
