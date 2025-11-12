// App.js - Asosiy fayl
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import LocationCard from './components/LocationCard';
import MapView from './components/MapView';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Mock data for historical places
  const historicalPlaces = [
    {
      id: 1,
      name: "Registon maydoni",
      description: "Samarqanddagi mashhur me'moriy yodgorlik",
      image: "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=400&h=300&fit=crop",
      rating: 4.8,
      location: { lat: 39.6542, lng: 66.9757 }
    },
    {
      id: 2,
      name: "Shahi Zinda",
      description: "Samarqanddagi qadimiy maqbaralar majmuasi",
      image: "https://images.unsplash.com/photo-1622623549805-5a5d4b27d973?w=400&h=300&fit=crop",
      rating: 4.7,
      location: { lat: 39.6615, lng: 66.9882 }
    },
    {
      id: 3,
      name: "Bibi Xonim masjidi",
      description: "Amir Temur qurdirgan buyuk masjid",
      image: "https://images.unsplash.com/photo-1622623549805-5a5d4b27d973?w=400&h=300&fit=crop",
      rating: 4.6,
      location: { lat: 39.6590, lng: 66.9757 }
    },
    {
      id: 4,
      name: "Xiva ichan qal'a",
      description: "Xorazmdagi qadimiy shahar qal'asi",
      image: "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=400&h=300&fit=crop",
      rating: 4.9,
      location: { lat: 41.3783, lng: 60.3619 }
    },
    {
      id: 5,
      name: "Buxoro Ark",
      description: "Buxorodagi qadimiy hukmdor qal'asi",
      image: "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=400&h=300&fit=crop",
      rating: 4.5,
      location: { lat: 39.7756, lng: 64.4094 }
    },
    {
      id: 6,
      name: "Minorai Kalon",
      description: "Buxorodagi ulkan minora",
      image: "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=400&h=300&fit=crop",
      rating: 4.7,
      location: { lat: 39.7758, lng: 64.4147 }
    }
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
      setSearchResults(historicalPlaces);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(historicalPlaces);
      return;
    }
    
    const filtered = historicalPlaces.filter(place => 
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
            O'zbekiston Tarixiy Joylari
          </h1>
          
          <SearchBar onSearch={handleSearch} isDarkMode={isDarkMode} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6 text-green-700">
                Topilgan joylar ({searchResults.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchResults.map(place => (
                  <LocationCard 
                    key={place.id} 
                    place={place} 
                    onSelect={setSelectedLocation}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
              
              {searchResults.length === 0 && (
                <div className="text-center py-12 text-gray-500 text-xl">
                  Hech qanday natija topilmadi
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <MapView 
                  location={selectedLocation || historicalPlaces[0]} 
                  isDarkMode={isDarkMode}
                />
              </ProtectedRoute>
            </div>
          </div>
        </div>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;