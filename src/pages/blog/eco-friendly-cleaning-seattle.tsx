import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

export default function EcoFriendlyCleaningArticle() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Eco-Friendly Cleaning Services in Seattle | SparklHaven</title>
        <meta 
          name="description" 
          content="Eco-friendly cleaning uses non-toxic products that improve indoor air quality and reduce health risks in Seattle homes."
        />
        <meta name="keywords" content="eco-friendly cleaning Seattle, green cleaning service Seattle, eco cleaners Seattle" />
        <link rel="canonical" href="https://sparklhavencleaningservice.com/blog/eco-friendly-cleaning-seattle" />
      </Head>

      <article className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 text-sm font-medium"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                {t('blog.post5.category')}
              </span>
              <span className="flex items-center gap-1">
                <FaClock />
                6 {t('blog.readTime')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t('article5.title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article5.intro')}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
              <p className="text-gray-800 font-medium">
                <strong>Quick Answer:</strong> {t('article5.aeo')}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article5.h2.1')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article5.p1.1')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article5.h2.2')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article5.p2.1')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article5.h2.3')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article5.p3.1')}
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('article5.cta.title')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('article5.cta.desc')}
              </p>
              <Link 
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                {t('blog.cta.button')}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}