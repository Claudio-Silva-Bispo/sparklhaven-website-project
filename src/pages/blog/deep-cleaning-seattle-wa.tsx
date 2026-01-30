import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

export default function DeepCleaningSeattleArticle() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Deep Cleaning Services in Seattle | SparklHaven</title>
        <meta 
          name="description" 
          content="Deep cleaning includes detailed cleaning of kitchens, bathrooms, appliances, baseboards and high-touch areas in Seattle, Bellevue and Redmond."
        />
        <meta name="keywords" content="deep cleaning Seattle, deep cleaning service Seattle, residential deep cleaning" />
        <link rel="canonical" href="https://sparklhavencleaningservice.com/blog/deep-cleaning-seattle-wa" />
      </Head>

      <article className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#62d517] hover:text-green-700 mb-6 text-sm font-medium"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-[#62d517] text-white rounded-full font-medium">
                {t('blog.post2.category')}
              </span>
              <span className="flex items-center gap-1">
                <FaClock />
                6 {t('blog.readTime')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t('article2.title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article2.intro')}
            </p>

            <div className="bg-gray-50 border-l-4 border-[#62d517] p-4 my-8">
              <p className="text-gray-800 font-medium">
                <strong>Quick Answer:</strong> {t('article2.aeo')}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article2.h2.1')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article2.p1.1')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article2.h2.2')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article2.p2.1')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article2.h2.3')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article2.p3.1')}
            </p>

            <div className="bg-gradient-to-r bg-[#001b3c] rounded-xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('article2.cta.title')}
              </h3>
              <p className="text-white mb-6">
                {t('article2.cta.desc')}
              </p>
              <Link 
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#62d517] hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
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