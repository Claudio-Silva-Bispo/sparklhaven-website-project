import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

export default function GaleriaPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { 
        id: 1, 
        src: '/assets/gallery/armario-depois.jpeg', 
        alt: 'Professional closet organization in Bellevue, WA',
        title: 'Closet Deep Cleaning - Bellevue, WA',
        location: 'Bellevue, WA'
    },
    { 
        id: 2, 
        src: '/assets/gallery/banheiro.jpeg', 
        alt: 'Bathroom deep cleaning service in Seattle, WA',
        title: 'Bathroom Sanitization - Seattle, WA',
        location: 'Seattle, WA'
    },
    { 
        id: 3, 
        src: '/assets/gallery/cama.jpeg', 
        alt: 'Bedroom cleaning service in Kirkland, WA',
        title: 'Bedroom Cleaning - Kirkland, WA',
        location: 'Kirkland, WA'
    },
    { 
        id: 4, 
        src: '/assets/gallery/fogao-antes.jpeg', 
        alt: 'Stove cleaning before in Redmond, WA',
        title: 'Kitchen Stove - Before Cleaning - Redmond, WA',
        location: 'Redmond, WA'
    },
    { 
        id: 5, 
        src: '/assets/gallery/fogao-depois.jpeg', 
        alt: 'Stove deep cleaning after in Redmond, WA',
        title: 'Kitchen Stove - After Cleaning - Redmond, WA',
        location: 'Redmond, WA'
    },
    { 
        id: 6, 
        src: '/assets/gallery/fogao-dois-depois.jpeg', 
        alt: 'Professional stove cleaning result in Bothell, WA',
        title: 'Sparkling Clean Stove - Bothell, WA',
        location: 'Bothell, WA'
    },
    { 
        id: 7, 
        src: '/assets/gallery/geladeira.jpeg', 
        alt: 'Refrigerator deep cleaning in Sammamish, WA',
        title: 'Refrigerator Deep Clean - Sammamish, WA',
        location: 'Sammamish, WA'
    },
    { 
        id: 8, 
        src: '/assets/gallery/quarto.jpeg', 
        alt: 'Room cleaning service in Issaquah, WA',
        title: 'Complete Room Cleaning - Issaquah, WA',
        location: 'Issaquah, WA'
    },
    { 
        id: 9, 
        src: '/assets/gallery/sala-dois.jpeg', 
        alt: 'Living room cleaning in Mercer Island, WA',
        title: 'Living Room Deep Clean - Mercer Island, WA',
        location: 'Mercer Island, WA'
    },
    { 
        id: 10, 
        src: '/assets/gallery/sala-quatro.jpeg', 
        alt: 'Professional living room cleaning in Seattle, WA',
        title: 'Living Room Professional Service - Seattle, WA',
        location: 'Seattle, WA'
    },
    { 
        id: 11, 
        src: '/assets/gallery/sala-tres.jpeg', 
        alt: 'Living room organization service in Bellevue, WA',
        title: 'Living Room Organization - Bellevue, WA',
        location: 'Bellevue, WA'
    },
    { 
        id: 12, 
        src: '/assets/gallery/sala.jpeg', 
        alt: 'Complete living room cleaning in Kirkland, WA',
        title: 'Living Room Complete Cleaning - Kirkland, WA',
        location: 'Kirkland, WA'
    },
    { 
        id: 13, 
        src: '/assets/gallery/teto.jpeg', 
        alt: 'Ceiling and high areas cleaning in Redmond, WA',
        title: 'Ceiling Deep Cleaning - Redmond, WA',
        location: 'Redmond, WA'
    }
    ];

  const areas = [
    { name: 'Seattle, WA', icon: '🏙️' },
    { name: 'Kirkland, WA', icon: '🌊' },
    { name: 'Bellevue, WA', icon: '🏢' },
    { name: 'Redmond, WA', icon: '💼' },
    { name: 'Bothell, WA', icon: '🌲' },
    { name: 'Sammamish, WA', icon: '🏞️' },
    { name: 'Issaquah, WA', icon: '⛰️' },
    { name: 'Mercer Island, WA', icon: '🏝️' }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <Head>
        <title>Gallery - Professional Cleaning Services | SparklHaven</title>
        <meta 
          name="description" 
          content="See our professional cleaning work across Seattle, Kirkland, Bellevue, Redmond and surrounding areas."
        />
        <link rel="canonical" href="https://sparklhavencleaningservice.com/galeria" />
      </Head>

      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 text-sm font-medium"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('gallery.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {images.map((image, index) => (
                <button
                key={image.id}
                onClick={() => openModal(index)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-xl transition-all duration-300"
                style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
                }}
                >
                <img
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-xs font-semibold flex items-center gap-1">
                        <FaMapMarkerAlt className="text-blue-400" />
                        {image.location}
                    </p>
                    </div>
                </div>
                </button>
            ))}
            </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {t('gallery.cta.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('gallery.cta.subtitle')}
            </p>
            <Link 
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t('gallery.cta.button')}
            </Link>
          </div>
        </div>

        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes className="text-3xl" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors text-4xl"
            >
              ‹
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors text-4xl"
            >
              ›
            </button>

            <div className="absolute bottom-4 text-white text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}