import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About SparklHaven Cleaning Service",
              "description": "Family-owned cleaning service in Seattle, Kirkland, and Bellevue. Professional, reliable, and eco-friendly cleaning solutions.",
              "url": "https://sparklhavencleaningservice.com/#about",
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "SparklHaven Cleaning Service",
                "description": "Family-owned cleaning business serving Greater Seattle Area with care, trust, and dedication",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Seattle",
                  "addressRegion": "WA",
                  "addressCountry": "US"
                },
                "telephone": "+1-425-476-5411",
                "priceRange": "$$",
                "areaServed": [
                  "Seattle, WA",
                  "Kirkland, WA",
                  "Bellevue, WA",
                  "Redmond, WA",
                  "Bothell, WA",
                  "Sammamish, WA",
                  "Issaquah, WA",
                  "Mercer Island, WA"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Cleaning Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Residential Cleaning",
                        "description": "Professional home cleaning services"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Cleaning",
                        "description": "Office and commercial space cleaning"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Move In/Out Cleaning",
                        "description": "Deep cleaning for moving situations"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127"
                }
              }
            })
          }}
        />
      </Head>

      <section 
        id="about" 
        className={`relative py-20 lg:py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
            : 'bg-white'
        }`}
      >
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
            <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
              isDarkMode ? 'bg-[#62d517]/20' : 'bg-gray-200'
            }`}></div>
            <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl ${
              isDarkMode ? 'bg-[#62d517]/15' : 'bg-gray-200'
            }`}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 lg:mb-20">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-5 ${
              isDarkMode 
                ? 'bg-[#62d517]/15 ring-1 ring-[#62d517] text-white' 
                : 'bg-[#62d517] text-white'
            }`}>
              <span>👨‍👩‍👧‍👦</span>
              <span>{t('about.badge')}</span>
            </div>
            
            <h2 className={`text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 bg-clip-text text-transparent text-start lg:text-center ${
              isDarkMode 
                ? 'bg-gradient-to-r from-white to-gray-300' 
                : 'bg-gradient-to-r from-[#001b3c] via-[#001b3c] to-[#001b3c]'
            }`}>
              {t('about.title')}
            </h2>
            
            <p className={`text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-start lg:text-center ${
              isDarkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              {t('about.subtitle')}
            </p>
          </div>

          <div className={`backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16 shadow-xl transition-all duration-700 ${
            isDarkMode 
              ? 'bg-white/5 ring-1 ring-white/10' 
              : 'bg-white/80 ring-1 ring-gray-300'
          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto lg:mx-0 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#62d517] to-[#62d517]/80 shadow-2xl">
                  {showPhoto ? (
                    <img
                      src="/assets/services/couple/foto.jpg" 
                      alt="SparklHaven Family - Professional Cleaning Service in Seattle"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl lg:text-7xl">
                      👨‍👩‍👧‍👦
                    </div>
                  )}
                </div>

                <div className={`font-semibold mb-2 text-lg ${
                  isDarkMode ? 'text-[#62d517]' : 'text-[#62d517]'
                }`}>
                  {t('about.company')}
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  📍 Seattle, Kirkland & Bellevue, WA
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('about.bio1')}
                </p>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('about.bio2')}
                </p>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('about.bio3')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                  <div className={`ring-1 rounded-lg p-4 text-center transition-colors ${
                    isDarkMode 
                      ? 'bg-[#62d517]/10 ring-[#62d517]/20 hover:bg-[#62d517]/20' 
                      : 'bg-gray-100/70 ring-gray-300 hover:bg-gray-100'
                  }`}>
                    <div className="text-3xl mb-2">❤️</div>
                    <div className={`font-semibold mb-1 ${
                      isDarkMode ? 'text-[#62d517]' : 'text-[#62d517]'
                    }`}>{t('about.care')}</div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{t('about.careDesc')}</div>
                  </div>
                  <div className={`ring-1 rounded-lg p-4 text-center transition-colors ${
                    isDarkMode 
                      ? 'bg-[#62d517]/10 ring-[#62d517]/20 hover:bg-[#62d517]/20' 
                      : 'bg-gray-100/70 ring-gray-300 hover:bg-gray-100'
                  }`}>
                    <div className="text-3xl mb-2">🤝</div>
                    <div className={`font-semibold mb-1 ${
                      isDarkMode ? 'text-[#62d517]' : 'text-[#62d517]'
                    }`}>{t('about.trust')}</div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{t('about.trustDesc')}</div>
                  </div>
                  <div className={`ring-1 rounded-lg p-4 text-center transition-colors ${
                    isDarkMode 
                      ? 'bg-[#62d517]/10 ring-[#62d517]/20 hover:bg-[#62d517]/20' 
                      : 'bg-gray-100/70 ring-gray-300 hover:bg-gray-100'
                  }`}>
                    <div className="text-3xl mb-2">⭐</div>
                    <div className={`font-semibold mb-1 ${
                      isDarkMode ? 'text-[#62d517]' : 'text-[#62d517]'
                    }`}>{t('about.dedication')}</div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{t('about.dedicationDesc')}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center pt-6">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#62d517] hover:bg-[#62d517]/90 text-white px-4 py-4 lg:px-8 lg:py-4 rounded-lg font-semibold md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center w-full justify-center"
                  >
                    <a href="tel:+14254765411">
                      📞 {t('hero.cta')}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('about.familyBusiness')}</h3>
              <p className="text-gray-300">{t('about.familyBusinessDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('about.reliable')}</h3>
              <p className="text-gray-300">{t('about.reliableDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('about.ecoFriendly')}</h3>
              <p className="text-gray-300">{t('about.ecoFriendlyDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('about.flexibility')}</h3>
              <p className="text-gray-300">{t('about.flexibilityDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('about.attention')}</h3>
              <p className="text-gray-300">{t('about.attentionDesc')}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('about.satisfaction')}</h3>
              <p className="text-gray-300">{t('about.satisfactionDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;