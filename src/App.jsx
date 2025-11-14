// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';
import PlaceDetails from './pages/PlaceDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { historicalPlaces } from './data/historicalPlaces';
import Places from './components/Places';

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
  const [searchQuery, setSearchQuery] = useState('');

  // Mock user
  const mockUser = {
    id: 1,
    name: "Vicky Gulgowski",
    email: "vicky@example.com",
    avatar: "VG",
    memberSince: "2023",
    favorites: [1, 3, 7],
    bookings: [],
    preferences: {
      theme: 'light',
      notifications: true
    }
  };

  // Mock notifications
  const mockNotifications = [
    {
      id: 1,
      message: "Historical Uzbekistan ga xush kelibsiz! Birinchi turingiz uchun 20% chegirma",
      time: "2 soat oldin",
      read: false,
      type: "promotion"
    },
    {
      id: 2,
      message: "Samarqand viloyatida yangi tarixiy joylar qo'shildi",
      time: "1 kun oldin",
      read: true,
      type: "update"
    }
  ];

  // Loader simulyatsiyasi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setSearchResults(historicalPlaces);
      setNotifications(mockNotifications);
      setSelectedLocation(historicalPlaces[0]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Qidiruv funksiyasi
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults(historicalPlaces);
      return;
    }

    const filtered = historicalPlaces.filter(place =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.description.toLowerCase().includes(query.toLowerCase()) ||
      place.city.toLowerCase().includes(query.toLowerCase()) ||
      place.features.some(feature =>
        feature.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(filtered);
  };

  // Filtr funksiyasi
  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setSearchResults(historicalPlaces);
    } else {
      const filtered = historicalPlaces.filter(place => place.category === category);
      setSearchResults(filtered);
    }
  };

  // Tungi rejimni almashtirish
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  // Tema effekti
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Login/Logout funksiyalari
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser(mockUser);
    setNotifications(prev => [
      {
        id: Date.now(),
        message: "Muvaffaqiyatli tizimga kirdingiz! Xush kelibsiz.",
        time: "Hozirgina",
        read: false,
        type: "system"
      },
      ...prev
    ]);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowProfile(false);
    setNotifications(prev => [
      {
        id: Date.now(),
        message: "Tizimdan muvaffaqiyatli chiqdingiz",
        time: "Hozirgina",
        read: false,
        type: "system"
      },
      ...prev
    ]);
  };

  // Favorite funksiyasi
  const toggleFavorite = (placeId) => {
    if (!isLoggedIn) {
      alert('Iltimos, favorite qo\'shish uchun tizimga kiring');
      return;
    }
    setUser(prev => {
      const favorites = prev.favorites.includes(placeId)
        ? prev.favorites.filter(id => id !== placeId)
        : [...prev.favorites, placeId];

      // Notification qo'shish
      const place = historicalPlaces.find(p => p.id === placeId);
      setNotifications(prevNotifications => [
        {
          id: Date.now(),
          message: favorites.includes(placeId)
            ? `${place.name} favorite'larga qo'shildi`
            : `${place.name} favorite'lardan olib tashlandi`,
          time: "Hozirgina",
          read: false,
          type: "favorite"
        },
        ...prevNotifications
      ]);

      return { ...prev, favorites };
    });
  };

  // Saqlangan temani yuklash
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDarkMode(true);

    // Mock login for demo
    const timer = setTimeout(() => {
      // setIsLoggedIn(true);
      // setUser(mockUser);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 to-green-50 text-gray-900'
    }`}>
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

<Routes>
  {/* Asosiy sahifa */}
  <Route
    path="/"
    element={
      <Places
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        searchResults={searchResults}
        selectedLocation={selectedLocation}
        user={user}
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        historicalPlaces={historicalPlaces}
        onSearch={handleSearch}
        onFilter={handleFilter}
        onLocationSelect={setSelectedLocation}
        onToggleFavorite={toggleFavorite}
        onLogin={handleLogin}
      />
    }
  />

  {/* Profil sahifa */}
  <Route 
    path="/profile" 
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Profile user={user} isDarkMode={isDarkMode} />
      </ProtectedRoute>
    } 
  />

  {/* Joy tafsilotlari sahifasi */}
  <Route
    path="/place/:id"
    element={
      <PlaceDetails
        isDarkMode={isDarkMode}
        isLoggedIn={isLoggedIn}
        onToggleFavorite={toggleFavorite}
        user={user}
      />
    }
  />

  {/* Topilmagan sahifa */}
  <Route path="*" element={<NotFound isDarkMode={isDarkMode} />} />
</Routes>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;