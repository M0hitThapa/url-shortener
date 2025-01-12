import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const shortenURL = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/url`, {
        url: originalUrl,
      });
  
      // Construct the shortened URL by appending the shortId to the base URL
      const shortenedLink = `${window.location.origin}/${response.data.id}`;
      setShortUrl(shortenedLink);
    } catch (error) {
      console.error('Error shortening the URL', error);
    }
  };
  
  

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">URL Shortener</h1>
      <div className="w-full max-w-md">
        <input
          className="w-full p-3 border rounded-md mb-4"
          type="text"
          placeholder="Enter a URL to shorten"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-md"
          onClick={shortenURL}
        >
          Shorten URL
        </button>
      </div>
      {shortUrl && (
        <div className="mt-4">
          <p className="text-lg">
            Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{shortUrl}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
