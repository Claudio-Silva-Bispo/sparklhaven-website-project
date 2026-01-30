import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const menuItems = [
    { item: 'nav.home', path: '#home', icon: '🏠' },
    { item: 'nav.services', path: '#services', icon: '✨' },
    { item: 'nav.about', path: '#about', icon: '👥' },
    { item: 'nav.feedback', path: '#feedback', icon: '⭐' },
    { item: 'nav.blog', path: '/blog', icon: '📧' },
    { item: 'nav.galeria', path: '/galeria', icon: '🖼️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    
    if (path.startsWith('#')) {
      if (window.location.pathname === '/') {
        const sectionId = path.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          window.history.replaceState(null, '', path);
          setActiveHash(path);
        }
      } else {
        window.location.href = '/' + path;
      }
    } else {
      window.location.href = path;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 shadow-lg bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            <div className="flex items-center">
              <button 
                onClick={() => handleNavigation('#home')} 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-white-500 to-white-600 rounded-xl flex items-center justify-center text-2xl">
                  <img src="../assets/logo/logo-sem-fundo.PNG" alt="Logo da empresa" />
                </div>
                <span className="text-xl font-bold text-[#001b3c]">SparklHaven</span>
              </button>
            </div>
            
            <nav className="flex items-center space-x-1">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path)}
                  className={`px-4 py-2 text-sm rounded-lg flex items-center space-x-2 transition-all ${
                    activeHash === menuItem.path 
                      ? 'bg-[#62d517]/20 text-[#001b3c]'
                      : 'text-[#001b3c] hover:bg-[#62d517]/20'
                  }`}
                >
                  <span>{menuItem.icon}</span>
                  <span>{t(menuItem.item)}</span>
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="px-4 py-3 rounded-lg transition-all duration-300 hover:scale-110 hidden xl:flex ring-1 ring-[#62d517] hover:bg-[#62d517]/10"
                aria-label="Toggle theme"
              >
                <span className="text-md">{isDarkMode ? '☀️' : '🌙'}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hidden xl:flex ring-1 ring-[#62d517] hover:bg-[#62d517]/10 text-[#001b3c]"
              >
                {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
              </button>

              <a 
                href="tel:+14254765411" 
                className="bg-[#62d517] hover:bg-[#62d517]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                📞 (425) 476-5411
              </a>
            </div>
          </div>
        </div>
      </header>

      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 bg-white ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            <button 
              onClick={() => handleNavigation('#home')} 
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-white-500 to-white-600 rounded-lg flex items-center justify-center text-xl">
                <img src="../assets/logo/logo-sem-fundo.PNG" alt="Logo da empresa" />
              </div>
              <span className="text-lg font-bold text-[#001b3c]">SparklHaven Cleaning</span>
            </button>
            
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 transition-colors text-[#001b3c] hover:text-[#62d517]"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 lg:hidden bg-gray-900/50">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm shadow-2xl bg-white">
            <div className="flex items-center justify-between p-4 ring-b ring-1 ring-[#62d517]/30">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-[#001b3c]">
                <span className="text-2xl">✨</span>
                Menu
              </h2>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 rounded-lg transition-colors text-[#001b3c] hover:bg-[#62d517]/10"
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path)}
                  className="flex items-center space-x-3 px-4 py-4 rounded-lg transition-colors text-left ring-1 ring-[#62d517]/30 text-[#001b3c] hover:bg-[#62d517]/10"
                >
                  <span className="text-2xl">{menuItem.icon}</span>
                  <span className="font-medium">{t(menuItem.item)}</span>
                </button>
              ))}
              
              <div className="pt-4 space-y-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full rounded-lg px-4 py-3 transition-all font-semibold ring-1 ring-[#62d517] hover:bg-[#62d517]/10 text-[#001b3c]"
                >
                  <span className="mr-2">{isDarkMode ? '☀️' : '🌙'}</span>
                  {isDarkMode ? t('nav.lightMode') || 'Modo Claro' : t('nav.darkMode') || 'Modo Escuro'}
                </button>

                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg transition-all font-semibold ring-1 ring-[#62d517] hover:bg-[#62d517]/10 text-[#001b3c]"
                >
                  <span className="mr-2">{language === 'en' ? '🇧🇷' : '🇺🇸'}</span>
                  {language === 'en' ? 'Português' : 'English'}
                </button>

                <a 
                  href="tel:+14254765411" 
                  className="flex items-center justify-center w-full px-4 py-4 bg-[#62d517] hover:bg-[#62d517]/90 text-white rounded-lg transition-all font-semibold shadow-lg"
                >
                  <span className="mr-2">📞</span>
                  {t('nav.callNow') || 'Ligar Agora'}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}