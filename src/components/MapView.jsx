// components/MapView.jsx
import React from 'react';

const MapView = ({ location, isDarkMode }) => {
  return (
    <div className={`rounded-xl shadow-lg overflow-hidden ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="bg-green-600 text-white p-6">
        <h3 className="text-xl font-bold">{location.name}</h3>
        <p className="text-green-100">Xaritada ko'rsatilmoqda</p>
      </div>
      
      <div className={`h-64 relative flex items-center justify-center ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full animate-ping opacity-75"></div>
            <div className="w-8 h-8 bg-green-600 rounded-full absolute top-2 left-2"></div>
          </div>
          <p className={`text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {isDarkMode ? 'Qora tema xaritasi' : 'Oq tema xaritasi'}
          </p>
        </div>
      </div>
      
      <div className={`p-6 border-t ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span className="font-semibold">Kenglik:</span>
            <span>{location.location.lat}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">Uzunlik:</span>
            <span>{location.location.lng}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapView;