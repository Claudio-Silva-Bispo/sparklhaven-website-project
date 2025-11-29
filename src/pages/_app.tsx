import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowUp, FaWhatsapp, FaSun, FaMoon, FaShare, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdLanguage } from 'react-icons/md';
import '../globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const socialMenuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowScrollTop(window.scrollY > 300);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target as Node)) {
        setShowSocialMedia(false);
      }
    };

    if (showSocialMedia) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSocialMedia]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/sparklhavencleaning/', color: 'from-pink-500 to-purple-600', label: 'Instagram' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61583366373894', color: 'from-blue-600 to-blue-700', label: 'Facebook' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@SparklHavenCleaning', color: 'from-red-600 to-red-700', label: 'YouTube' },
    { icon: FaXTwitter, url: 'https://x.com/Sparklhaven', color: 'from-gray-800 to-black', label: 'Twitter' },
  ];

  return (

    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="assets/logo/logo-sem-fundo.PNG" />
        <link rel="apple-touch-icon" href="assets/logo/logo-sem-fundo.PNG" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Schema da Organização (Global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SparklHaven Cleaning Service",
              "image": "https://sparklhavencleaningservice.com/logo/logo-sem-fundo.PNG",
              "url": "https://sparklhavencleaningservice.com",
              "telephone": "+1-425-476-5411",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.6062,
                "longitude": -122.3321
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Seattle",
                  "sameAs": "https://en.wikipedia.org/wiki/Seattle"
                },
                {
                  "@type": "City",
                  "name": "Kirkland",
                  "sameAs": "https://en.wikipedia.org/wiki/Kirkland,_Washington"
                },
                {
                  "@type": "City",
                  "name": "Bellevue"
                },
                {
                  "@type": "City",
                  "name": "Redmond"
                },
                {
                  "@type": "City",
                  "name": "Bothell"
                },
                {
                  "@type": "City",
                  "name": "Sammamish"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/sparklhavencleaning/",
                "https://www.facebook.com/profile.php?id=61583366373894",
                "https://www.youtube.com/@SparklHavenCleaning",
                "https://x.com/Sparklhaven",
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
                      "description": "Deep cleaning for moving"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />

        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* Botão de Idioma */}
          <button
            onClick={toggleLanguage}
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-600 text-white shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label={language === 'en' ? 'Mudar para Português' : 'Change to English'}
          >
            <div className="flex items-center gap-1">
              <MdLanguage size={20} />
              {/* <span className="text-xs font-bold">{language === 'en' ? 'PT' : 'EN'}</span> */}
            </div>
          </button>

          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
            aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/+14254765411"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>

          {/* Container de Redes Sociais */}
          <div ref={socialMenuRef} className="relative flex items-center">
            {/* Ícones das Redes Sociais - Expandem para a esquerda */}
            <div className={`absolute right-16 flex gap-2 transition-all duration-300 ${showSocialMedia ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white shadow-lg hover:scale-110 transition-all duration-300`}
                  aria-label={social.label}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Botão de Compartilhar/Redes Sociais */}
            <button
              onClick={() => setShowSocialMedia(!showSocialMedia)}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-110"
              aria-label="Redes Sociais"
            >
              <FaShare size={20} className={`transition-transform duration-300 ${showSocialMedia ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Botão Voltar ao Topo */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition"
              aria-label="Voltar ao topo"
            >
              <FaArrowUp size={20} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function MyApp(props: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent {...props} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;