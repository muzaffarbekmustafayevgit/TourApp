// components/Navbar.jsx
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import BackButton from './BackButton';

const Navbar = ({ isDarkMode, toggleTheme, isLoggedIn, onLogin, onLogout, user, notifications, onShowProfile }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      {/* Top Navigation - Desktop */}
      <nav className={`hidden md:block shadow-lg transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white border-b border-gray-700' : 'bg-white text-gray-900 border-b border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo and Main Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UZ</span>
                </div>
                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  O'zbekiston Travel
                </span>
              </div>
              
              <div className="flex space-x-6">
                <a href="#bosh-sahifa" className="hover:text-green-600 transition-colors font-medium">
                  Bosh Sahifa
                </a>
                <a href="#tarixiy-joylar" className="hover:text-green-600 transition-colors font-medium">
                  Tarixiy Joylar
                </a>
                <a href="#marshrutlar" className="hover:text-green-600 transition-colors font-medium">
                  Marshrutlar
                </a>
                <a href="#haqida" className="hover:text-green-600 transition-colors font-medium">
                  Haqida
                </a>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              
              {isLoggedIn ? (
                <>
                  {/* Notifications */}
                  <div className="relative">
                    <button
                      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                      className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.24 8.56a5.97 5.97 0 01-4.66-7.5 1 1 0 00-1.14-1.14 7.97 7.97 0 006.16 10.19 5.97 5.97 0 01-4.66-7.5z" />
                      </svg>
                      {notifications?.filter(n => !n.read).length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          {notifications.filter(n => !n.read).length}
                        </span>
                      )}
                    </button>
                  </div>

                  {/* User Profile */}
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {user?.name?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <span className="font-medium">{user?.name || 'User'}</span>
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                      <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 z-50 ${
                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                      }`}>
                        <button
                          onClick={onShowProfile}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Mening Profilim
                        </button>
                        <button
                          onClick={onLogout}
                          className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Chiqish
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <button
                  onClick={onLogin}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Kirish
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 shadow-2xl transition-colors duration-300 z-40 ${
        isDarkMode ? 'bg-gray-900 text-white border-t border-gray-700' : 'bg-white text-gray-900 border-t border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          
          {/* Top Row - Search and Back Button */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <BackButton />
            <div className="flex-1 max-w-xs mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Qidirish..."
                  className={`w-full pl-3 pr-3 py-2 text-sm rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                <svg 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>

          {/* Bottom Row - Main Navigation */}
          <div className="flex justify-around items-center py-3">
            
            {/* Home */}
            <a href="#bosh-sahifa" className="flex flex-col items-center space-y-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs">Bosh Sahifa</span>
            </a>

            {/* Places */}
            <a href="#tarixiy-joylar" className="flex flex-col items-center space-y-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs">Joylar</span>
            </a>

            {/* Routes */}
            <a href="#marshrutlar" className="flex flex-col items-center space-y-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-xs">Marshrutlar</span>
            </a>

            {/* User/Auth */}
            {isLoggedIn ? (
              <button 
                onClick={onShowProfile}
                className="flex flex-col items-center space-y-1"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="text-xs">Profil</span>
              </button>
            ) : (
              <button 
                onClick={onLogin}
                className="flex flex-col items-center space-y-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs">Kirish</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Padding for mobile bottom nav */}
      <div className="md:hidden pb-28"></div>
    </>
  );
};

export default Navbar;