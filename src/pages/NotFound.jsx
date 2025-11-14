import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <h1 className="text-9xl font-extrabold text-green-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
        Sahifa topilmadi!
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
        Siz izlayotgan sahifa mavjud emas yoki o‘chirib tashlangan bo‘lishi mumkin. Iltimos, bosh sahifaga qayting.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;
