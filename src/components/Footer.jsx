// components/Footer.jsx
import React from 'react';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`mt-16 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white border-t border-gray-700' 
        : 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">UZ</span>
              </div>
              <h3 className="text-2xl font-bold">O'zbekiston Travel</h3>
            </div>
            <p className={`max-w-md text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-green-100'
            }`}>
              O'zbekistonning noyob tarixiy joylarini kashf eting va qadimiy madaniyatni his eting
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-green-700 hover:bg-green-800'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-green-700 hover:bg-green-800'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-green-700 hover:bg-green-800'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b border-green-400 pb-2">Tezkor Havolalar</h4>
            <ul className="space-y-3">
              <li>
                <a href="#bosh-sahifa" className={`hover:text-green-300 transition-colors flex items-center space-x-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-green-100'
                }`}>
                  <span className="w-1 h-1 bg-green-300 rounded-full"></span>
                  <span>Bosh Sahifa</span>
                </a>
              </li>
              <li>
                <a href="#tarixiy-joylar" className={`hover:text-green-300 transition-colors flex items-center space-x-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-green-100'
                }`}>
                  <span className="w-1 h-1 bg-green-300 rounded-full"></span>
                  <span>Tarixiy Joylar</span>
                </a>
              </li>
              <li>
                <a href="#marshrutlar" className={`hover:text-green-300 transition-colors flex items-center space-x-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-green-100'
                }`}>
                  <span className="w-1 h-1 bg-green-300 rounded-full"></span>
                  <span>Marshrutlar</span>
                </a>
              </li>
              <li>
                <a href="#galereya" className={`hover:text-green-300 transition-colors flex items-center space-x-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-green-100'
                }`}>
                  <span className="w-1 h-1 bg-green-300 rounded-full"></span>
                  <span>Galereya</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b border-green-400 pb-2">Bog'lanish</h4>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-green-100'}`}>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@uzbekistantravel.uz</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+998 90 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Toshkent, O'zbekiston</span>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="pt-4">
              <p className="text-sm mb-2">Yangiliklardan xabardor bo'ling</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Emailingiz" 
                  className={`flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 ${
                    isDarkMode ? 'bg-gray-800 text-white' : 'bg-green-700 text-white placeholder-green-200'
                  }`}
                />
                <button className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  isDarkMode 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-white text-green-600 hover:bg-green-50'
                }`}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t py-6 ${
          isDarkMode ? 'border-gray-700' : 'border-green-500'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-center md:text-left ${
              isDarkMode ? 'text-gray-400' : 'text-green-200'
            }`}>
              &copy; {currentYear} O'zbekiston Travel. Barcha huquqlar himoyalangan.
            </p>
            
            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className={`hover:text-green-300 transition-colors ${
                isDarkMode ? 'text-gray-400' : 'text-green-200'
              }`}>
                Maxfiylik Siyosati
              </a>
              <a href="#terms" className={`hover:text-green-300 transition-colors ${
                isDarkMode ? 'text-gray-400' : 'text-green-200'
              }`}>
                Foydalanish Shartlari
              </a>
              <a href="#sitemap" className={`hover:text-green-300 transition-colors ${
                isDarkMode ? 'text-gray-400' : 'text-green-200'
              }`}>
                Sayt Xaritasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;