// components/ProtectedRoute.jsx
import React from 'react';

const ProtectedRoute = ({ isLoggedIn, children, isDarkMode = false }) => {
  if (!isLoggedIn) {
    return (
      <div className={`rounded-xl border-2 border-dashed border-green-500 p-8 text-center ${
        isDarkMode ? 'bg-gray-800' : 'bg-green-50'
      }`}>
        <div className="max-w-sm mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7V11" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            Xaritani ko'rish uchun tizimga kiring
          </h3>
          <p className="text-gray-600">
            Bu funksiyadan foydalanish uchun hisobingizga kiring
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;