import React, { useEffect, useState } from 'react'

const QuoteWidget = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://zenquotes.io/api/random');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setQuote(data[0].q);
        setAuthor(data[0].a);
      }
    } catch (error) {
      console.error('Failed to fetch quote', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='text-center mt-8 text-gray-100'>
      {loading ? (
        <p>Loading quote...</p>
      ) : (
        <>
          <p className='italic opacity-0 animate-fade-in'>{quote}</p>
          <p className='mt-1 opacity-0 animate-fade-in'>- {author}</p>
        </>
      )}
      <button
        onClick={fetchQuote}
        className='mt-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition'
      >
        Inspire me
      </button>
    </div>
  );
};

export default QuoteWidget;
