import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email) {
      alert(t('footer.newsletterSuccess'));
      setEmail('');
    }
  };

  return (
    <footer className={`relative overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900' 
        : 'bg-white'
    }`}>
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
          <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? 'bg-[#62d517]/20' : 'bg-gray-200'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl ${
            isDarkMode ? 'bg-[#62d517]/15' : 'bg-gray-200'
          }`}></div>
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className={`text-xl lg:text-2xl font-bold bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white to-gray-300' 
                  : 'bg-gradient-to-r from-[#001b3c] via-[#001b3c] to-[#001b3c]'
              }`}>
                SparklHaven Cleaning Service
              </div>
            </div>
            
            <p className={`mb-6 text-base lg:text-lg font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('footer.tagline')}
            </p>
            
            <p className={`text-sm lg:text-base leading-relaxed mb-6 max-w-md ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('footer.description')}
            </p>
            
            <div className="flex gap-3 lg:gap-4">
              <a 
                href="https://wa.me/14254765411" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#62d517]/10 ring-1 ring-[#62d517]/20 hover:bg-[#62d517]/20 hover:ring-[#62d517]/40' 
                    : 'bg-gray-100 ring-1 ring-gray-300 hover:bg-[#62d517]/10 hover:ring-[#62d517]'
                }`}
                aria-label="WhatsApp"
              >
                📱
              </a>
              <a 
                href="mailto:contato@sparklhavencleaning.com" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#62d517]/10 ring-1 ring-[#62d517]/20 hover:bg-[#62d517]/20 hover:ring-[#62d517]/40' 
                    : 'bg-gray-100 ring-1 ring-gray-300 hover:bg-[#62d517]/10 hover:ring-[#62d517]'
                }`}
                aria-label="Email"
              >
                📧
              </a>
              <a 
                href="#" 
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#62d517]/10 ring-1 ring-[#62d517]/20 hover:bg-[#62d517]/20 hover:ring-[#62d517]/40' 
                    : 'bg-gray-100 ring-1 ring-gray-300 hover:bg-[#62d517]/10 hover:ring-[#62d517]'
                }`}
                aria-label="Facebook"
              >
                👍
              </a>
              <a 
                href="https://www.instagram.com/sparklhavencleaning/" target='_blink'
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#62d517]/10 ring-1 ring-[#62d517]/20 hover:bg-[#62d517]/20 hover:ring-[#62d517]/40' 
                    : 'bg-gray-100 ring-1 ring-gray-300 hover:bg-[#62d517]/10 hover:ring-[#62d517]'
                }`}
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-lg lg:text-xl font-bold mb-6 ${
              isDarkMode ? 'text-gray-200' : 'text-[#001b3c]'
            }`}>
              {t('footer.services')}
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a 
                  href="#residential" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('services.residential.title')}
                </a>
              </li>
              <li>
                <a 
                  href="#commercial" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('services.commercial.title')}
                </a>
              </li>
              <li>
                <a 
                  href="#office" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('services.office.title')}
                </a>
              </li>
              <li>
                <a 
                  href="#move" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('services.moveInOut.title')}
                </a>
              </li>
              <li>
                <a 
                  href="#trash" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('services.trash.title')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg lg:text-xl font-bold mb-6 ${
              isDarkMode ? 'text-gray-200' : 'text-[#001b3c]'
            }`}>
              {t('footer.company')}
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a 
                  href="#about" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('footer.testimonials')}
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/sparklhavencleaning/" target='_blank'
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('Instagram')}
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61583366373894" target='_blank'
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('Facebook')}
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@SparklHavenCleaning" target='_blank'
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('YouTube')}
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/Sparklhaven" target='_blank'
                  className={`text-sm lg:text-base transition-colors duration-300 block ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-[#62d517]' 
                      : 'text-gray-600 hover:text-[#62d517]'
                  }`}
                >
                  {t('Twitter')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12 lg:mb-16">
          <h3 className={`text-lg lg:text-xl font-bold mb-6 ${
            isDarkMode ? 'text-gray-200' : 'text-[#001b3c]'
          }`}>
            {t('footer.contact')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📧</span>
              <div>
                <div className={`text-xs lg:text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{t('footer.email')}</div>
                <a 
                  href="mailto:sparklhavencleaning@gmail.com" 
                  className={`text-sm lg:text-base transition-colors duration-300 break-all ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-[#62d517]' 
                      : 'text-[#001b3c] hover:text-[#62d517]'
                  }`}
                >
                  sparklhavencleaning@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📱</span>
              <div>
                <div className={`text-xs lg:text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{t('footer.phone')}</div>
                <a 
                  href="tel:+14254765411" 
                  className={`text-sm lg:text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-[#62d517]' 
                      : 'text-[#001b3c] hover:text-[#62d517]'
                  }`}
                >
                  (425) 476-5411
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📍</span>
              <div>
                <div className={`text-xs lg:text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{t('footer.location')}</div>
                <div className={`text-sm lg:text-base ${
                  isDarkMode ? 'text-gray-200' : 'text-[#001b3c]'
                }`}>
                  Seattle, WA
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-6 lg:pt-8 border-t ${
          isDarkMode ? 'border-white/10' : 'border-gray-300'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6">
            <div className={`text-sm lg:text-base text-center sm:text-left ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('footer.rights')}
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 lg:gap-8">
              <a 
                href="#privacy" 
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-[#62d517]' 
                    : 'text-gray-600 hover:text-[#62d517]'
                }`}
              >
                {t('footer.privacy')}
              </a>
              <a 
                href="#terms" 
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-[#62d517]' 
                    : 'text-gray-600 hover:text-[#62d517]'
                }`}
              >
                {t('footer.terms')}
              </a>
              <a 
                href="#cookies" 
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-[#62d517]' 
                    : 'text-gray-600 hover:text-[#62d517]'
                }`}
              >
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;