// components/PlaceDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { historicalPlaces } from '../data/historicalPlaces';

const PlaceDetails = ({ isDarkMode, isLoggedIn, onToggleFavorite, user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Place ma'lumotlarini yuklash
  useEffect(() => {
    const foundPlace = historicalPlaces.find(p => p.id === parseInt(id));
    if (foundPlace) {
      setPlace(foundPlace);
    }
    setIsLoading(false);
  }, [id]);

  // Rasm karuseli funksiyalari
  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === place.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? place.images.length - 1 : prev - 1
    );
  };

  // Kategoriya stilari
  const getCategoryStyle = (category) => {
    const styles = {
      architecture: {
        bg: 'bg-blue-500',
        text: 'text-blue-700 dark:text-blue-300',
        light: 'bg-blue-100 dark:bg-blue-900'
      },
      religious: {
        bg: 'bg-purple-500',
        text: 'text-purple-700 dark:text-purple-300',
        light: 'bg-purple-100 dark:bg-purple-900'
      },
      fortress: {
        bg: 'bg-red-500',
        text: 'text-red-700 dark:text-red-300',
        light: 'bg-red-100 dark:bg-red-900'
      },
      museum: {
        bg: 'bg-green-500',
        text: 'text-green-700 dark:text-green-300',
        light: 'bg-green-100 dark:bg-green-900'
      }
    };
    return styles[category] || {
      bg: 'bg-gray-500',
      text: 'text-gray-700 dark:text-gray-300',
      light: 'bg-gray-100 dark:bg-gray-900'
    };
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-4">Joy topilmadi</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Bosh Sahifaga Qaytish
          </button>
        </div>
      </div>
    );
  }

  const categoryStyle = getCategoryStyle(place.category);
  const isFavorite = user?.favorites?.includes(place.id);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Orqaga tugmasi */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
              : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Orqaga
        </button>
      </div>

      {/* Asosiy kontent */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chap ustun - Rasmlar va asosiy ma'lumotlar */}
          <div className="lg:col-span-2">
            {/* Rasm karuseli */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <div className="relative h-96">
                <img 
                  src={place.images[currentImageIndex]} 
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Rasm navigatsiyasi */}
                {place.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Rasm indikatorlari */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {place.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Yuqori teglar */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className={`px-3 py-2 rounded-full text-sm font-semibold ${categoryStyle.light} ${categoryStyle.text}`}>
                    {place.category}
                  </span>
                  <span className={`px-3 py-2 rounded-full text-sm font-medium ${
                    isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white/90 text-gray-700'
                  }`}>
                    {place.city}
                  </span>
                </div>

                {/* Favorite tugmasi */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => onToggleFavorite(place.id)}
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      isFavorite 
                        ? 'bg-red-500 text-white shadow-lg' 
                        : isDarkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white/90 text-gray-600 hover:bg-white'
                    }`}
                  >
                    <svg 
                      className={`w-6 h-6 ${isFavorite ? 'scale-110' : 'scale-100'}`} 
                      fill={isFavorite ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Sarlavha */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-4xl font-bold text-white mb-2">{place.name}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="font-semibold">{place.rating}</span>
                    </div>
                    <span className="text-white/80">📍 {place.city}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kichik rasmlar galereyasi */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {place.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-green-500 transform scale-105' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${place.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Tab navigatsiyasi */}
            <div className={`rounded-2xl overflow-hidden shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex overflow-x-auto">
                  {[
                    { key: 'overview', label: 'Umumiy ma\'lumot', icon: '📖' },
                    { key: 'features', label: 'Xususiyatlar', icon: '⭐' },
                    { key: 'location', label: 'Lokatsiya', icon: '📍' },
                    { key: 'reviews', label: 'Sharhlar', icon: '💬' }
                  ].map(({ key, label, icon }) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeTab === key
                          ? 'border-b-2 border-green-500 text-green-600'
                          : isDarkMode
                          ? 'text-gray-400 hover:text-gray-300'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <span>{icon}</span>
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab kontenti */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-4">Tavsif</h3>
                    <p className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {place.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className={`p-4 rounded-xl ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Ish vaqti
                        </h4>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {place.openingHours}
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-xl ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Eng yaxshi vaqt
                        </h4>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {place.bestTime}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Xususiyatlar</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {place.features?.map((feature, index) => (
                        <div 
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            categoryStyle.light
                          }`}>
                            <span className="text-sm">✓</span>
                          </div>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Lokatsiya</h3>
                    <div className={`rounded-xl overflow-hidden h-64 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      {/* Xarita komponenti bu yerda bo'ladi */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🗺️</div>
                          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            Xarita {place.city} shahrida
                          </p>
                          <p className={`text-sm mt-1 ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            Kenglik: {place.location.lat}, Uzunlik: {place.location.lng}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Foydalanuvchi Sharhlari</h3>
                    <div className="space-y-4">
                      {/* Mock reviews */}
                      {[
                        { name: "Ali Valiyev", rating: 5, comment: "Ajoyib tarixiy joy! Har bir detalga e'tibor berilgan.", date: "2 kun oldin" },
                        { name: "Sevara Xolmirzayeva", rating: 4, comment: "Me'moriy jihatdan juda go'zal. Qayta kelishni xohlayman.", date: "1 hafta oldin" },
                        { name: "Jamshid Qodirov", rating: 5, comment: "O'zbekiston tarixini his qilish uchun mukammal joy.", date: "2 hafta oldin" }
                      ].map((review, index) => (
                        <div 
                          key={index}
                          className={`p-4 rounded-xl ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {review.name[0]}
                              </div>
                              <div>
                                <h4 className="font-semibold">{review.name}</h4>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <svg 
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                      }`}
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className={`text-sm ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              {review.date}
                            </span>
                          </div>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* O'ng ustun - Qo'shimcha ma'lumotlar va harakatlar */}
          <div className="space-y-6">
            {/* Narx va harakatlar kartasi */}
            <div className={`rounded-2xl p-6 shadow-lg sticky top-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold mb-2 ${
                  place.price === 'Bepul' 
                    ? 'text-green-600' 
                    : isDarkMode 
                    ? 'text-yellow-400' 
                    : 'text-yellow-600'
                }`}>
                  {place.price}
                </div>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Kirish narxi
                </p>
              </div>

              <div className="space-y-3">
                <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  isLoggedIn
                    ? 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}>
                  {isLoggedIn ? 'Chipta Sotib Olish' : 'Chipta uchun tizimga kiring'}
                </button>
                
                <button className={`w-full py-3 px-4 rounded-xl font-semibold border transition-all duration-300 ${
                  isDarkMode
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Tur Buyurtma Qilish
                </button>

                <button className={`w-full py-3 px-4 rounded-xl font-semibold border transition-all duration-300 ${
                  isDarkMode
                    ? 'border-blue-600 text-blue-400 hover:bg-blue-900/20'
                    : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                }`}>
                  Yo'l Ko'rsatkich Olish
                </button>
              </div>

              <div className={`mt-6 pt-6 border-t ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h4 className="font-semibold mb-3">Tez Ma'lumotlar</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Qurilgan:</span>
                    <span className="font-medium">{place.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Shahar:</span>
                    <span className="font-medium">{place.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Kategoriya:</span>
                    <span className="font-medium">{place.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Xavfsizlik maslahatlari */}
            <div className={`rounded-2xl p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Xavfsizlik Maslahatlari
              </h4>
              <ul className={`text-sm space-y-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li>• Qimmatbaho narsalaringizga e'tibor bering</li>
                <li>• Rasmiy qo'llanmalarga amal qiling</li>
                <li>• Belgilangan yo'llardan chetga chiqmang</li>
                <li>• Suratga olish qoidalariga rioya qiling</li>
              </ul>
            </div>

            {/* Bog'langan joylar */}
            <div className={`rounded-2xl p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className="font-semibold mb-4">Yaqin Atrofdagi Joylar</h4>
              <div className="space-y-3">
                {historicalPlaces
                  .filter(p => p.city === place.city && p.id !== place.id)
                  .slice(0, 3)
                  .map(relatedPlace => (
                    <button
                      key={relatedPlace.id}
                      onClick={() => navigate(`/place/${relatedPlace.id}`)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'hover:bg-gray-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={relatedPlace.images[0]} 
                          alt={relatedPlace.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium truncate">{relatedPlace.name}</h5>
                          <p className={`text-sm truncate ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {relatedPlace.category}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;