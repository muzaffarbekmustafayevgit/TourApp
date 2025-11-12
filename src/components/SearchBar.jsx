// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch, isDarkMode }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className={`relative flex items-center rounded-lg shadow-lg overflow-hidden ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <input
            type="text"
            placeholder="Tarixiy joylarni qidirish..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`flex-1 py-4 px-6 outline-none ${
              isDarkMode 
                ? 'bg-gray-800 text-white placeholder-gray-400' 
                : 'bg-white text-gray-900 placeholder-gray-500'
            }`}
          />
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white p-4 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;