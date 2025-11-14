// components/MapView.jsx
import React from 'react';

const MapView = ({ location, locations, onLocationSelect, isDarkMode }) => {
  // Agar location undefined bo'lsa, default qiymat
  const currentLocation = location || {
    id: 0,
    name: "O'zbekiston",
    city: "Toshkent",
    description: "Markaziy Osiyoning markazida joylashgan davlat",
    location: { lat: 41.2995, lng: 69.2401 },
    category: "country",
    rating: 4.5
  };

  // Agar locations array berilgan bo'lsa, undan foydalanamiz
  const displayLocations = locations || [currentLocation];

  // Kategoriya ranglari
  const getCategoryColor = (category) => {
    const colors = {
      architecture: 'bg-blue-500',
      religious: 'bg-purple-500',
      fortress: 'bg-red-500',
      museum: 'bg-green-500',
      country: 'bg-gray-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  // Kategoriya nomlari
  const getCategoryName = (category) => {
    const names = {
      architecture: 'Arxitektura',
      religious: 'Diniy',
      fortress: 'Qal\'a',
      museum: 'Muzey',
      country: 'Davlat'
    };
    return names[category] || category;
  };

  const categoryColor = getCategoryColor(currentLocation.category);
  const categoryName = getCategoryName(currentLocation.category);

  return (
    <div className={`rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`}>
      {/* Header */}
      <div className={`p-6 ${
        isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-green-600 to-blue-600'
      } text-white`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold truncate">{currentLocation.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isDarkMode ? 'bg-white/20' : 'bg-white/20'
          }`}>
            {categoryName}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-green-100 text-sm">
            📍 {currentLocation.city}
          </p>
          {currentLocation.rating && (
            <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-xs font-semibold">{currentLocation.rating}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Xarita kontenti */}
      <div className={`h-80 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-green-50'
      }`}>
        {/* Xarita background */}
        <div className="absolute inset-0 opacity-20">
          <div className={`w-full h-full ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}></div>
        </div>

        {/* Markaziy lokatsiya marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Pulsating effect */}
            <div className={`w-8 h-8 ${categoryColor} rounded-full animate-ping opacity-75`}></div>
            {/* Asosiy marker */}
            <div className={`w-6 h-6 ${categoryColor} rounded-full absolute top-1 left-1 flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
              📍
            </div>
          </div>
        </div>

        {/* Qo'shimcha markerlar (agar locations array berilgan bo'lsa) */}
        {locations && locations.length > 1 && (
          <>
            {locations.slice(0, 4).map((loc, index) => {
              if (loc.id === currentLocation.id) return null;
              
              const positions = [
                { top: '30%', left: '20%' },
                { top: '20%', left: '70%' },
                { top: '70%', left: '30%' },
                { top: '60%', left: '80%' }
              ];
              
              const pos = positions[index] || { top: '50%', left: '50%' };
              
              return (
                <button
                  key={loc.id}
                  onClick={() => onLocationSelect && onLocationSelect(loc)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
                  } rounded-lg p-2 transition-all duration-200`}
                  style={pos}
                >
                  <div className="relative">
                    <div className={`w-4 h-4 ${getCategoryColor(loc.category)} rounded-full opacity-70 group-hover:opacity-100`}></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className={`whitespace-nowrap text-xs font-semibold px-2 py-1 rounded ${
                        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 shadow-lg'
                      }`}>
                        {loc.name}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </>
        )}

        {/* Grid chiziqlari */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full opacity-10">
            {/* Vertical lines */}
            <div className="flex justify-between h-full">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-px bg-gray-500 h-full"></div>
              ))}
            </div>
            {/* Horizontal lines */}
            <div className="flex flex-col justify-between absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-px bg-gray-500 w-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Xarita markazi */}
        <div className="absolute bottom-4 left-4">
          <div className={`px-3 py-2 rounded-lg text-sm font-medium ${
            isDarkMode ? 'bg-gray-800/80 text-gray-300' : 'bg-white/80 text-gray-700'
          } backdrop-blur-sm`}>
            🗺️ Interaktiv Xarita
          </div>
        </div>

        {/* Zoom controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'
          } shadow-lg transition-colors`}>
            <span className="text-lg">+</span>
          </button>
          <button className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'
          } shadow-lg transition-colors`}>
            <span className="text-lg">−</span>
          </button>
        </div>
      </div>
      
      {/* Footer ma'lumotlari */}
      <div className={`p-6 border-t ${
        isDarkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
      }`}>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className={`font-semibold mb-1 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Kenglik</p>
            <p className={`font-mono ${
              isDarkMode ? 'text-gray-300' : 'text-gray-800'
            }`}>
              {currentLocation.location.lat.toFixed(4)}°
            </p>
          </div>
          <div>
            <p className={`font-semibold mb-1 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Uzunlik</p>
            <p className={`font-mono ${
              isDarkMode ? 'text-gray-300' : 'text-gray-800'
            }`}>
              {currentLocation.location.lng.toFixed(4)}°
            </p>
          </div>
        </div>
        
        {/* Qo'shimcha ma'lumotlar */}
        {currentLocation.description && (
          <div className={`mt-4 p-3 rounded-lg ${
            isDarkMode ? 'bg-gray-700/50' : 'bg-green-50'
          }`}>
            <p className={`text-xs leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-green-800'
            }`}>
              {currentLocation.description}
            </p>
          </div>
        )}

        {/* Xarita holati */}
        <div className={`mt-4 flex items-center justify-between text-xs ${
          isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          <span>🟢 Xarita faol</span>
          <span>{locations ? `${locations.length} joy` : '1 joy'}</span>
        </div>
      </div>
    </div>
  );
};

// Default props
MapView.defaultProps = {
  location: null,
  locations: null,
  onLocationSelect: null,
  isDarkMode: false
};

export default MapView;