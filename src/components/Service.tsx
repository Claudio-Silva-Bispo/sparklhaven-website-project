import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const CompleteServicesPage = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: number]: number}>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const mainServices = [
    {
      icon: "🏡",
      titleKey: "services.residential.title",
      subtitleKey: "services.residential.subtitle",
      descKey: "services.residential.desc",
      featureKeys: [
        "services.residential.feature1",
        "services.residential.feature2",
        "services.residential.feature3",
        "services.residential.feature4",
        "services.residential.feature5",
        "services.residential.feature6"
      ],
      color: "from-[#62d517] to-[#62d517]",
      borderColor: "ring-blue-400/40",
      images: [
        "../../assets/services/residential/residential-one.jpeg",
        "/assets/services/residential/residential-two.jpeg",
        "/assets/services/residential/residential-three.jpeg",
        "/assets/services/residential/office.jpg",
        "/assets/services/residential/table.jpg",
        "/assets/services/residential/room.jpg",
        "/assets/services/residential/porta.jpg"
      ]
    },
    {
      icon: "🏢",
      titleKey: "services.commercial.title",
      subtitleKey: "services.commercial.subtitle",
      descKey: "services.commercial.desc",
      featureKeys: [
        "services.commercial.feature1",
        "services.commercial.feature2",
        "services.commercial.feature3",
        "services.commercial.feature4",
        "services.commercial.feature5",
        "services.commercial.feature6"
      ],
      color: "from-[#62d517] to-[#62d517]",
      borderColor: "ring-green-400/40",
      images: [
        "/assets/services/commercial/clean.png",
        "/assets/services/commercial/floor.png",
        "/assets/services/commercial/limpando-predio.jpg",
        "/assets/services/commercial/table.png",
        "/assets/services/commercial/vacum.png",
        "/assets/services/commercial/olhando.jpg",
      ]
    },
    {
      icon: "💼",
      titleKey: "services.office.title",
      subtitleKey: "services.office.subtitle",
      descKey: "services.office.desc",
      featureKeys: [
        "services.office.feature1",
        "services.office.feature2",
        "services.office.feature3",
        "services.office.feature4",
        "services.office.feature5",
        "services.office.feature6"
      ],
      color: "from-[#62d517] to-[#62d517]",
      borderColor: "ring-purple-400/40",
      images: [
        "/assets/services/office/one.jpg",
        "/assets/services/office/two.webp",
        "/assets/services/office/three.png",
        "/assets/services/office/four.webp",
        "/assets/services/office/five.jpg",
      ]
    },
    {
      icon: "📦",
      titleKey: "services.moveInOut.title",
      subtitleKey: "services.moveInOut.subtitle",
      descKey: "services.moveInOut.desc",
      featureKeys: [
        "services.moveInOut.feature1",
        "services.moveInOut.feature2",
        "services.moveInOut.feature3",
        "services.moveInOut.feature4",
        "services.moveInOut.feature5",
        "services.moveInOut.feature6"
      ],
      color: "from-[#62d517] to-[#62d517]",
      borderColor: "ring-orange-400/40",
      images: [
        "/assets/services/move/move-in-one.PNG",
        "/assets/services/move/move-in-two.jpeg",
        "/assets/services/move/move-in-three.jpeg",
        "/assets/services/move/move-in-four.jpeg",
        "/assets/services/move/limpeza.jpg",
        "/assets/services/move/olhando.jpg",
        "/assets/services/move/visualizando.jpg",
      ]
    },
    {
      icon: "🗑️",
      titleKey: "services.trash.title",
      subtitleKey: "services.trash.subtitle",
      descKey: "services.trash.desc",
      featureKeys: [
        "services.trash.feature1",
        "services.trash.feature2",
        "services.trash.feature3",
        "services.trash.feature4",
        "services.trash.feature5",
        "services.trash.feature6"
      ],
      color: "from-[#62d517] to-[#62d517]",
      borderColor: "ring-yellow-400/40",
      images: [
        "/assets/services/trash/one.webp",
        "/assets/services/trash/two.png",
        "/assets/services/trash/three.webp",
      ]
    }
  ];

  useEffect(() => {
    const intervals = mainServices.map((service, serviceIndex) => {
      return setInterval(() => {
        setCurrentImageIndexes(prev => ({
          ...prev,
          [serviceIndex]: (prev[serviceIndex] + 1) % service.images.length
        }));
      }, 5000);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const workflow = [
    { step: "1", titleKey: "services.workflow.contact", descKey: "services.workflow.contactDesc" },
    { step: "2", titleKey: "services.workflow.estimate", descKey: "services.workflow.estimateDesc" },
    { step: "3", titleKey: "services.workflow.schedule", descKey: "services.workflow.scheduleDesc" },
    { step: "4", titleKey: "services.workflow.cleaning", descKey: "services.workflow.cleaningDesc" },
    { step: "5", titleKey: "services.workflow.satisfaction", descKey: "services.workflow.satisfactionDesc" }
  ];

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
              "@type": "ItemList",
              "name": "Cleaning Services in Seattle, Kirkland, Bellevue",
              "description": "Professional cleaning services including residential, commercial, office, move in/out cleaning, and trash removal in Greater Seattle Area",
              "url": "https://sparklhavencleaningservice.com/#services",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Residential Cleaning Seattle",
                    "description": "Professional home cleaning services in Seattle, Kirkland, Bellevue area. Deep cleaning, regular maintenance, and eco-friendly solutions.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "SparklHaven Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Kirkland, WA", "Bellevue, WA", "Redmond, WA", "Bothell, WA", "Sammamish, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Commercial Cleaning Seattle",
                    "description": "Professional commercial and business cleaning services for offices, retail spaces, and facilities in Greater Seattle Area.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "SparklHaven Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Kirkland, WA", "Bellevue, WA", "Redmond, WA", "Bothell, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "Office Cleaning Seattle",
                    "description": "Corporate office cleaning services with flexible scheduling including after-hours cleaning in Seattle area.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "SparklHaven Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Kirkland, WA", "Bellevue, WA", "Redmond, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "name": "Move In/Out Cleaning Seattle",
                    "description": "Deep cleaning services for moving in or out in Seattle, Kirkland, Bellevue. Perfect for landlords, tenants, and real estate agents.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "SparklHaven Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Kirkland, WA", "Bellevue, WA", "Redmond, WA", "Bothell, WA", "Sammamish, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "Service",
                    "name": "Trash Removal Seattle",
                    "description": "Junk and trash removal services with responsible disposal in Greater Seattle Area.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "SparklHaven Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Kirkland, WA", "Bellevue, WA", "Redmond, WA", "Bothell, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div 
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gray-100'
        }`} 
        id='services'
      >
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 ${
                isDarkMode 
                  ? 'bg-[#62d517]/15 ring-1 ring-[#62d517]/30 text-white' 
                  : 'bg-[#62d517] text-white'
              }`}>
                <span>✨</span>
                <span>{t('services.badge')}</span>
              </div>
              <h2 className={`text-4xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent text-center pb-5 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-[#001b3c] via-[#001b3c] to-[#001b3c]'
              }`}>
                {t('services.title')}
              </h2>
              <p className={`text-xl max-w-3xl mx-auto text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Professional Cleaning Services in Seattle, Kirkland, Bellevue & Surrounding Areas
              </p>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  className={`backdrop-blur-sm ring-1 rounded-3xl p-8 lg:p-12 transition-all duration-500 group shadow-xl ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 ring-white/10 hover:from-gray-700 hover:to-gray-800'
                      : 'bg-white ring-gray-300 hover:shadow-2xl'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    
                    <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-6xl">{service.icon}</span>
                      </div>
                      <h3 className={`text-3xl lg:text-4xl font-bold mb-3 ${
                        isDarkMode ? 'text-white' : 'text-[#001b3c]'
                      }`}>{t(service.titleKey)}</h3>
                      <p className={`text-xl mb-4 ${
                        isDarkMode ? 'text-blue-400' : 'text-[#62d517]'
                      }`}>{t(service.subtitleKey)}</p>
                      <p className={`text-lg leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{t(service.descKey)}</p>
                      
                      <div className={`ring-1 rounded-2xl p-6 ${
                        isDarkMode 
                          ? 'bg-gray-900/50 ring-white/10' 
                          : 'bg-gray-50 ring-gray-300'
                      }`}>
                        <h4 className={`text-lg font-semibold mb-4 ${
                          isDarkMode ? 'text-gray-200' : 'text-[#001b3c]'
                        }`}>{t('hero.included')}</h4>
                        <ul className="space-y-3">
                          {service.featureKeys.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[#62d517] text-xl mt-0.5">✓</span>
                              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{t(feature)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="mt-6 bg-[#62d517] hover:bg-[#62d517]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 min-w-full justify-center"
                      >
                        <a href="tel:+14254765411">
                          📞 {t('services.quote')}
                        </a>
                      </button>
                    </div>

                    <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                      <div className={`relative ring-1 rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[600px] ${
                        isDarkMode ? 'bg-gray-900/50 ring-white/10' : 'bg-gray-100 ring-gray-300'
                      }`}>
                        {service.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                              currentImageIndexes[index] === imgIdx ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${t(service.titleKey)} in Seattle - SparklHaven Cleaning Service`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const imgElement = e.currentTarget as HTMLImageElement;
                                imgElement.style.display = 'none';
                                const placeholder = imgElement.nextElementSibling as HTMLElement;
                                if (placeholder) placeholder.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 hidden items-center justify-center">
                              <div className="text-center">
                                <div className="text-8xl mb-4 opacity-50">📷</div>
                                <span className="text-6xl mb-4 block">{service.icon}</span>
                                <p className="text-gray-400 text-sm">Image {imgIdx + 1} of {service.images.length}</p>
                                <p className="text-gray-500 text-xs mt-2">{t(service.titleKey)}</p>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {service.images.map((_, dotIndex) => (
                            <button
                              key={dotIndex}
                              onClick={() => setCurrentImageIndexes(prev => ({
                                ...prev,
                                [index]: dotIndex
                              }))}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentImageIndexes[index] === dotIndex 
                                  ? 'bg-[#62d517] w-8' 
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                              aria-label={`View image ${dotIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`py-20 backdrop-blur-sm  ${
          isDarkMode ? 'bg-[#001b3c]' : 'bg-[#001b3c]'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 ${
                isDarkMode 
                  ? 'bg-[#62d517]/15 ring-1 ring-[#62d517]/30 text-white' 
                  : 'bg-white text-[#001b3c]'
              }`}>
                <span>🔄</span>
                <span>{t('services.workflow.badge')}</span>
              </div>
              <h2 className={`text-lg lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-white via-white to-white'
              }`}>
                {t('services.workflow.title')}
              </h2>
              <p className={`text-md ${isDarkMode ? 'text-gray-100' : 'text-gray-50'}`}>
                {t('services.workflow.subtitle')}
              </p>
            </div>

            <div className="max-w-8xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                {workflow.map((item, index) => (
                  <div key={index} className="relative">
                    <div className={`ring-1 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg ${
                      isDarkMode
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 ring-blue-400/30 hover:from-gray-700 hover:to-gray-800'
                        : 'bg-white ring-gray-300 hover:shadow-xl'
                    }`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#62d517] to-[#62d517]/80 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                        {item.step}
                      </div>
                      <h3 className={`font-bold text-lg mb-2 ${
                        isDarkMode ? 'text-white' : 'text-[#001b3c]'
                      }`}>{t(item.titleKey)}</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{t(item.descKey)}</p>
                    </div>
                    {index < workflow.length - 1 && (
                      <div className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-2xl ${
                        isDarkMode ? 'text-blue-500' : 'text-[#62d517]'
                      }`}>
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`ring-1 rounded-3xl p-12 text-center shadow-2xl ${
              isDarkMode
                ? 'bg-gradient-to-br from-white-800 to-gray-900 ring-blue-400/30'
                : 'bg-white ring-gray-300'
            }`}>
              <h2 className={`text-3xl lg:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-[#001b3c]'
              }`}>
                {t('services.cta.title')}
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Serving Seattle, Kirkland, Bellevue, Redmond, Bothell & Sammamish
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#62d517] hover:bg-[#62d517]/90 text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <a href="tel:+14254765411">
                  📞 {t('services.quote')}
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompleteServicesPage;