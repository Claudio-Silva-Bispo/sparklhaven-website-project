import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

export default function MoveInMoveOutCleaningArticle() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Move-In and Move-Out Cleaning in Seattle | SparklHaven</title>
        <meta 
          name="description" 
          content="Professional move-in and move-out cleaning in Seattle. Get your deposit back and start fresh in your new home."
        />
        <meta name="keywords" content="move out cleaning Seattle, move in cleaning Seattle, apartment cleaning Seattle" />
        <link rel="canonical" href="https://sparklhavencleaningservice.com/blog/move-in-move-out-cleaning-seattle" />
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
                {t('blog.post3.category')}
              </span>
              <span className="flex items-center gap-1">
                <FaClock />
                7 {t('blog.readTime')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t('article3.title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article3.intro')}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
              <p className="text-gray-800 font-medium">
                <strong>Quick Answer:</strong> {t('article3.aeo')}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article3.h2.1')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article3.p1.1')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article3.h2.2')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article3.p2.1')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article3.h2.3')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article3.p3.1')}
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('article3.cta.title')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('article3.cta.desc')}
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