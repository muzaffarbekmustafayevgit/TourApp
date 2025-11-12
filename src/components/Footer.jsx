// components/Footer.jsx
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`mt-12 py-8 ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-green-600 text-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">O'zbekiston Travel</h3>
            <p className="text-green-100">
              O'zbekistonning noyob tarixiy joylarini kashf eting
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Havolalar</h4>
            <ul className="space-y-2">
              <li><a href="#bosh-sahifa" className="text-green-100 hover:text-white transition-colors">Bosh Sahifa</a></li>
              <li><a href="#tarixiy-joylar" className="text-green-100 hover:text-white transition-colors">Tarixiy Joylar</a></li>
              <li><a href="#marshrutlar" className="text-green-100 hover:text-white transition-colors">Marshrutlar</a></li>
              <li><a href="#kontakt" className="text-green-100 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Biz bilan bog'laning</h4>
            <ul className="space-y-2 text-green-100">
              <li>Email: info@uzbekistantravel.uz</li>
              <li>Telefon: +998 90 123 45 67</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-500 mt-8 pt-6 text-center text-green-100">
          <p>&copy; 2023 O'zbekiston Travel. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;