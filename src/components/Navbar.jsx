// components/Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';
import BackButton from './BackButton';

const Navbar = ({ isDarkMode, toggleTheme, isLoggedIn, onLogin, onLogout }) => {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
         <BackButton/>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#bosh-sahifa" className="hover:text-green-200 transition-colors font-medium">
              Bosh Sahifa
            </a>
            <a href="#tarixiy-joylar" className="hover:text-green-200 transition-colors font-medium">
              Tarixiy Joylar
            </a>
            <a href="#marshrutlar" className="hover:text-green-200 transition-colors font-medium">
              Marshrutlar
            </a>
            <a href="#haqida" className="hover:text-green-200 transition-colors font-medium">
              Haqida
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            
            {isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Chiqish
              </button>
            ) : (
              <button 
                onClick={onLogin}
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Kirish
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden flex space-x-4 pb-4">
          <a href="#bosh-sahifa" className="hover:text-green-200 transition-colors text-sm">
            Bosh Sahifa
          </a>
          <a href="#tarixiy-joylar" className="hover:text-green-200 transition-colors text-sm">
            Tarixiy Joylar
          </a>
          <a href="#marshrutlar" className="hover:text-green-200 transition-colors text-sm">
            Marshrutlar
          </a>
          <a href="#haqida" className="hover:text-green-200 transition-colors text-sm">
            Haqida
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;