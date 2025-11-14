// components/Places.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import LocationCard from './LocationCard';
import MapView from './MapView';
import ProtectedRoute from './ProtectedRoute';

const Places = ({
  isDarkMode,
  isLoggedIn,
  searchResults,
  selectedLocation,
  user,
  activeFilter,
  searchQuery,
  historicalPlaces,
  onSearch,
  onFilter,
  onLocationSelect,
  onToggleFavorite,
  onLogin
}) => {
  const navigate = useNavigate();

  // Kategoriya konfiguratsiyasi
  const filterCategories = [
    { key: 'all', label: 'Hammasi', icon: '🌍' },
    { key: 'architecture', label: 'Arxitektura', icon: '🏛️' },
    { key: 'religious', label: 'Diniy', icon: '🕌' },
    { key: 'fortress', label: 'Qal\'a', icon: '🏰' },
    { key: 'museum', label: 'Muzey', icon: '🏛️' }
  ];

  // LocationCard ni bosganda PlaceDetails ga o'tish
  const handlePlaceSelect = (place) => {
    onLocationSelect(place);
    navigate(`/place/${place.id}`);
  };

  // Xaritadagi joyni bosganda PlaceDetails ga o'tish
  const handleMapLocationSelect = (place) => {
    onLocationSelect(place);
    navigate(`/place/${place.id}`);
  };

  return (
    <main className="py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              O'zbekiston Tarixiy Joylari
            </h1>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              O'zbekistonning boy madaniy merosi va qadimiy me'moriy durdonalarini kashf eting
            </p>
          </div>
        </div>

        {/* Promo banner */}
        {!isLoggedIn && (
          <div className={`mb-8 rounded-2xl p-6 backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600' 
              : 'bg-gradient-to-r from-green-50/80 to-blue-50/80 border border-green-200'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start">
                  🎉 Maxsus Taklif!
                </h3>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Hisob oching va birinchi turingiz uchun{' '}
                  <span className="font-bold text-green-600">20% CHEGRIMA</span> oling
                </p>
              </div>
              <button
                onClick={onLogin}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hoziroq Ro'yxatdan O'ting
              </button>
            </div>
          </div>
        )}

        {/* Search va Filtrlar */}
        <div className="mb-8">
          <SearchBar
            onSearch={onSearch}
            isDarkMode={isDarkMode}
            placeholder="Tarixiy joylar qidirish..."
          />

          {/* Filtr tugmalari */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {filterCategories.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => onFilter(key)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  activeFilter === key
                    ? 'bg-green-600 text-white shadow-lg'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Asosiy kontent */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Joylar ro'yxati */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Tarixiy Joylar ({searchResults.length})
                </h2>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {searchQuery && `"${searchQuery}" bo'yicha qidiruv natijalari`}
                </p>
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600 shadow-md'
              }`}>
                Ko'rsatilmoqda: {searchResults.length} / {historicalPlaces.length}
              </div>
            </div>

            {/* Joylar gridi - 1 ta rasm ko'rinishi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map(place => (
                <div
                  key={place.id}
                  className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                      : 'bg-white border border-gray-200 hover:border-green-200'
                  } cursor-pointer transform hover:-translate-y-2`}
                  onClick={() => handlePlaceSelect(place)}
                >
                  {/* Faqat 1 ta rasm */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={place.images[0]} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Kategoriya tegi */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDarkMode ? 'bg-gray-800/80 text-gray-300' : 'bg-white/90 text-gray-700'
                      }`}>
                        {place.category === 'architecture' && '🏛️ Arxitektura'}
                        {place.category === 'religious' && '🕌 Diniy'}
                        {place.category === 'fortress' && '🏰 Qal\'a'}
                        {place.category === 'museum' && '🏛️ Muzey'}
                      </span>
                    </div>

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
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                        user?.favorites?.includes(place.id)
                          ? 'bg-red-500 text-white shadow-lg' 
                          : isDarkMode
                          ? 'bg-gray-700/80 text-gray-300 hover:bg-gray-600'
                          : 'bg-white/90 text-gray-600 hover:bg-white'
                      }`}
                    >
                      <svg 
                        className={`w-4 h-4 transition-all duration-300 ${
                          user?.favorites?.includes(place.id) ? 'scale-110' : 'scale-100'
                        }`} 
                        fill={user?.favorites?.includes(place.id) ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Shahar tegi */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? 'bg-gray-800/80 text-gray-300' : 'bg-white/90 text-gray-700'
                      }`}>
                        📍 {place.city}
                      </span>
                    </div>

                    {/* Reyting */}
                    <div className="absolute bottom-3 right-3">
                      <div className="flex items-center bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                        <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-semibold">{place.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Kontent qismi */}
                  <div className="p-5">
                    <h3 className="font-bold text-xl leading-tight group-hover:text-green-600 transition-colors duration-300 mb-2">
                      {place.name}
                    </h3>
                    
                    <p className={`text-sm mb-3 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {place.description.length > 100 
                        ? `${place.description.substring(0, 100)}...` 
                        : place.description
                      }
                    </p>

                    {/* Xususiyatlar */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {place.features?.slice(0, 2).map((feature, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 rounded-lg text-xs ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                      {place.features?.length > 2 && (
                        <span className={`px-2 py-1 rounded-lg text-xs ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>
                          +{place.features.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Pastki ma'lumotlar */}
                    <div className={`flex justify-between items-center pt-3 border-t ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {place.openingHours}
                        </span>
                      </div>
                      
                      <div className={`text-lg font-bold ${
                        place.price === 'Bepul' 
                          ? 'text-green-600' 
                          : isDarkMode 
                          ? 'text-yellow-400' 
                          : 'text-yellow-600'
                      }`}>
                        {place.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hech narsa topilmaganda */}
            {searchResults.length === 0 && (
              <div className={`text-center py-20 rounded-2xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <div className="text-8xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold mb-4">Hech narsa topilmadi</h3>
                <p className={`text-lg mb-6 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Qidiruv yoki filtr shartlarini o'zgartirib ko'ring
                </p>
                <button
                  onClick={() => {
                    onSearch('');
                    onFilter('all');
                  }}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Barcha Joylarni Ko'rish
                </button>
              </div>
            )}
          </div>

          {/* Xarita paneli */}
          <div className="lg:col-span-1 space-y-6">
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className={`sticky top-8 rounded-2xl overflow-hidden shadow-2xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    Interaktiv Xarita
                  </h3>
                  <p className={`text-sm mt-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Joylarni xaritada ko'ring va batafsil ma'lumot oling
                  </p>
                </div>
                <div className="h-96">
                  <MapView
                    locations={historicalPlaces}
                    selectedLocation={selectedLocation}
                    onLocationSelect={handleMapLocationSelect}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <div className={`p-4 border-t ${
                  isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">
                      {selectedLocation 
                        ? `📍 ${selectedLocation.name}, ${selectedLocation.city}` 
                        : 'Joyni tanlang batafsil ma\'lumot olish uchun'}
                    </p>
                    {selectedLocation && (
                      <button
                        onClick={() => navigate(`/place/${selectedLocation.id}`)}
                        className="text-green-600 hover:text-green-700 text-sm font-semibold transition-colors"
                      >
                        Batafsil →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </ProtectedRoute>

            {/* Login prompt */}
            {!isLoggedIn && (
              <div className={`rounded-2xl p-8 text-center backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-green-50 border border-green-200'
              } shadow-xl`}>
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold mb-3">Interaktiv Xaritaga Kirish</h3>
                <p className={`text-lg mb-6 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Tizimga kirib tarixiy joylarni xaritada kuzating
                </p>
                <button
                  onClick={onLogin}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 w-full shadow-lg"
                >
                  Tizimga Kirish
                </button>
              </div>
            )}

            {/* Statistika */}
            <div className={`rounded-2xl p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                📊 Statistika
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Jami joylar:
                  </span>
                  <span className="font-bold text-green-600">{historicalPlaces.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Shaharlar:
                  </span>
                  <span className="font-bold text-blue-600">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Kategoriyalar:
                  </span>
                  <span className="font-bold text-purple-600">4</span>
                </div>
              </div>
            </div>

            {/* Tezkor harakatlar */}
            <div className={`rounded-2xl p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                ⚡ Tezkor Harakatlar
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/profile')}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
                    isDarkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    👤
                  </div>
                  <div>
                    <p className="font-medium">Profilim</p>
                    <p className={`text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Shaxsiy ma'lumotlaringiz
                    </p>
                  </div>
                </button>
                
                {user?.favorites?.length > 0 && (
                  <button
                    onClick={() => navigate('/profile?tab=favorites')}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
                      isDarkMode 
                        ? 'hover:bg-gray-700' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                      ❤️
                    </div>
                    <div>
                      <p className="font-medium">Sevimlilar</p>
                      <p className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {user.favorites.length} ta joy
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Places;