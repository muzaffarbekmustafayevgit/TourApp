// components/LocationCard.jsx
import React from 'react';

const LocationCard = ({ place, onSelect, isDarkMode }) => {
  const handleClick = () => {
    onSelect(place);
  };

  return (
    <div 
      onClick={handleClick}
      className={`rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 text-green-600 px-3 py-1 rounded-full font-semibold text-sm">
          ★ {place.rating}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-green-600">{place.name}</h3>
        <p className={`mb-4 line-clamp-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {place.description}
        </p>
        
        <div className="flex space-x-3">
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Batafsil
          </button>
          <button className={`border border-green-600 text-green-600 py-2 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors ${
            isDarkMode ? 'hover:bg-green-900' : 'hover:bg-green-50'
          }`}>
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;