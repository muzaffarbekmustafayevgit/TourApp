// hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme || 'green';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {
    theme,
    isDarkMode,
    changeTheme,
    toggleDarkMode
  };
};