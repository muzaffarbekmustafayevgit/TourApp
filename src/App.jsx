// App.jsx - Main Application File
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import LocationCard from './components/LocationCard';
import MapView from './components/MapView';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import { historicalPlaces } from './data/historicalPlaces';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [user, setUser] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  // Mock user data
  const mockUser = {
    name: "Vicky Gulgowski",
    email: "vicky@example.com",
    avatar: "VG",
    memberSince: "2023",
    favorites: [1, 3],
    bookings: []
  };

  // Mock notifications
  const mockNotifications = [
    {
      id: 1,
      message: "Welcome to Historical Uzbekistan! Get 20% off your first tour",
      time: "2 hours ago",
      read: false,
      type: "promotion"
    },
    {
      id: 2,
      message: "New historical places added in Samarkand region",
      time: "1 day ago",
      read: true,
      type: "update"
    }
  ];

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setSearchResults(historicalPlaces);
      setNotifications(mockNotifications);
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
      place.description.toLowerCase().includes(query.toLowerCase()) ||
      place.city.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
  };

  // Filter by category
  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setSearchResults(historicalPlaces);
    } else {
      const filtered = historicalPlaces.filter(place => 
        place.category === category
      );
      setSearchResults(filtered);
    }
  };

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    // Save theme preference to localStorage
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Authentication
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser(mockUser);
    // Add login notification
    setNotifications(prev => [{
      id: Date.now(),
      message: "Successfully logged in! Welcome back.",
      time: "Just now",
      read: false,
      type: "system"
    }, ...prev]);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowProfile(false);
  };

  // Toggle favorite
  const toggleFavorite = (placeId) => {
    if (!isLoggedIn) {
      alert('Please login to add favorites');
      return;
    }

    setUser(prev => {
      const favorites = prev.favorites.includes(placeId)
        ? prev.favorites.filter(id => id !== placeId)
        : [...prev.favorites, placeId];
      
      return { ...prev, favorites };
    });
  };

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      
      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        user={user}
        notifications={notifications}
        onShowProfile={() => setShowProfile(true)}
      />

      {/* User Profile Modal */}
      {showProfile && (
        <UserProfile
          user={user}
          isDarkMode={isDarkMode}
          onClose={() => setShowProfile(false)}
          onLogout={handleLogout}
        />
      )}

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Historical Places of Uzbekistan
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover the rich cultural heritage and ancient architecture of Uzbekistan
            </p>
          </div>

          {/* Promotional Banner */}
          {!isLoggedIn && (
            <div className={`mb-8 rounded-2xl p-6 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700' 
                : 'bg-gradient-to-r from-green-50 to-blue-50 border border-green-200'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">🎉 Special Offer!</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Get <span className="font-bold text-green-600">20% OFF</span> on your first historical tour when you create an account
                  </p>
                </div>
                <button
                  onClick={handleLogin}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          )}

          {/* Search and Filters */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} isDarkMode={isDarkMode} />
            
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['all', 'architecture', 'museum', 'religious', 'fortress'].map(category => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-green-600 text-white'
                      : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            
            {/* Search Results */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-green-600">
                  Discover Places ({searchResults.length})
                </h2>
                <span className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Showing {searchResults.length} of {historicalPlaces.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchResults.map(place => (
                  <LocationCard
                    key={place.id}
                    place={place}
                    onSelect={setSelectedLocation}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={user?.favorites?.includes(place.id)}
                    isDarkMode={isDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                ))}
              </div>

              {searchResults.length === 0 && (
                <div className={`text-center py-16 rounded-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>

            {/* Map Sidebar */}
            <div className="lg:col-span-1">
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <div className={`sticky top-8 rounded-2xl overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Interactive Map
                    </h3>
                  </div>
                  <MapView
                    location={selectedLocation || historicalPlaces[0]}
                    isDarkMode={isDarkMode}
                  />
                  <div className={`p-4 border-t ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedLocation 
                        ? `Viewing: ${selectedLocation.name}` 
                        : 'Select a location to view details'
                      }
                    </p>
                  </div>
                </div>
              </ProtectedRoute>

              {/* Login Prompt for Map */}
              {!isLoggedIn && (
                <div className={`rounded-2xl p-6 text-center ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="font-semibold mb-2">Interactive Map Access</h3>
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Login to explore historical places on our interactive map
                  </p>
                  <button
                    onClick={handleLogin}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Sign In to View Map
                  </button>
                </div>
              )}
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