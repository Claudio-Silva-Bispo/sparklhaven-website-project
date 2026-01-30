import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

export default function HouseCleaningSeattleArticle() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>House Cleaning Services in Seattle, WA | SparklHaven</title>
        <meta 
          name="description" 
          content="Professional house cleaning in Seattle typically includes kitchens, bathrooms, bedrooms and living areas, using safe and eco-friendly products."
        />
        <meta name="keywords" content="house cleaning Seattle WA, cleaning service Seattle, home cleaning service Seattle" />
        <link rel="canonical" href="https://sparklhavencleaningservice.com/blog/house-cleaning-seattle-wa" />
      </Head>

      <article className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#001b3c] hover:text-blue-700 mb-6 text-sm font-medium"
          >
            <FaArrowLeft />
            {t('blog.readMore').replace('article', 'Blog')}
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-[#62d517] text-white rounded-full font-medium">
                {t('blog.post1.category')}
              </span>
              <span className="flex items-center gap-1">
                <FaClock />
                5 {t('blog.readTime')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t('article1.title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.intro')}
            </p>

            <div className="bg-gray-50 border-l-4 border-[#62d517] p-4 my-8">
              <p className="text-gray-800 font-medium">
                <strong>Quick Answer:</strong> {t('article1.aeo')}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article1.h2.1')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.p1.1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.p1.2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article1.h2.2')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.p2.1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.p2.2')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t('article1.h2.3')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.p3.1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('article1.p3.2')}
            </p>

            <div className="bg-gradient-to-r bg-[#001b3c] rounded-xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('article1.cta.title')}
              </h3>
              <p className="text-white mb-6">
                {t('article1.cta.desc')}
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