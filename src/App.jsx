// App.jsx - Main Application File
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import LocationCard from './components/LocationCard';
import MapView from './components/MapView';
import ProtectedRoute from './components/ProtectedRoute';
import { historicalPlaces } from './data/historicalPlaces';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Mock data for historical places


  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setSearchResults(historicalPlaces);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Search functionality
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

  // Theme toggle
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  // Authentication
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (isLoading) return <Loader />;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
            Historical Places of Uzbekistan
          </h1>

          {/* Search */}
          <SearchBar onSearch={handleSearch} isDarkMode={isDarkMode} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Search Results */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6 text-green-700">
                Found Places ({searchResults.length})
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
                  No results found
                </div>
              )}
            </div>

            {/* Map */}
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

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
