// components/LocationCard.jsx (qisman kod)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ 
  place, 
  onSelect, 
  onToggleFavorite, 
  isFavorite, 
  isDarkMode, 
  isLoggedIn 
}) => {
  // ... existing code ...

  return (
    <div 
      className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        isDarkMode 
          ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
          : 'bg-white border border-gray-200 hover:border-green-200'
      } cursor-pointer transform hover:-translate-y-2`}
    >
      {/* Rasm qismi - Link qo'shildi */}
      <Link to={`/place/${place.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {/* ... existing image code ... */}
        </div>
      </Link>
      
      {/* Kontent qismi */}
      <div className="p-5">
        {/* Sarlavha - Link qo'shildi */}
        <Link to={`/place/${place.id}`} className="block">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl leading-tight group-hover:text-green-600 transition-colors duration-300">
              {place.name}
            </h3>
            <div className="flex items-center bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              {place.rating}
            </div>
          </div>
        </Link>

        {/* ... existing content ... */}

        {/* Batafsil ko'rish tugmasi */}
        <div className="flex justify-between items-center mt-4">
          <Link 
            to={`/place/${place.id}`}
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Batafsil Ko'rish
          </Link>
          
          {/* Favorite tugmasi */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (!isLoggedIn) {
                alert('Iltimos, favorite qo\'shish uchun tizimga kiring');
                return;
              }
              onToggleFavorite(place.id);
            }}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isFavorite 
                ? 'bg-red-500 text-white shadow-lg' 
                : isDarkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <svg 
              className={`w-5 h-5 transition-all duration-300 ${
                isFavorite ? 'scale-110' : 'scale-100'
              }`} 
              fill={isFavorite ? "currentColor" : "none"} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;