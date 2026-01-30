import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

interface BlogPost {
  slug: string;
  titleKey: string;
  descKey: string;
  categoryKey: string;
  readTime: string;
}

export default function BlogPage() {
  const { t } = useLanguage();

  const posts: BlogPost[] = [
    {
      slug: 'house-cleaning-seattle-wa',
      titleKey: 'blog.post1.title',
      descKey: 'blog.post1.desc',
      categoryKey: 'blog.post1.category',
      readTime: '5'
    },
    {
      slug: 'deep-cleaning-seattle-wa',
      titleKey: 'blog.post2.title',
      descKey: 'blog.post2.desc',
      categoryKey: 'blog.post2.category',
      readTime: '6'
    },
    {
      slug: 'move-in-move-out-cleaning-seattle',
      titleKey: 'blog.post3.title',
      descKey: 'blog.post3.desc',
      categoryKey: 'blog.post3.category',
      readTime: '7'
    },
    {
      slug: 'house-cleaning-cost-seattle-wa',
      titleKey: 'blog.post4.title',
      descKey: 'blog.post4.desc',
      categoryKey: 'blog.post4.category',
      readTime: '5'
    },
    {
      slug: 'eco-friendly-cleaning-seattle',
      titleKey: 'blog.post5.title',
      descKey: 'blog.post5.desc',
      categoryKey: 'blog.post5.category',
      readTime: '6'
    },
    {
      slug: 'office-cleaning-seattle-wa',
      titleKey: 'blog.post6.title',
      descKey: 'blog.post6.desc',
      categoryKey: 'blog.post6.category',
      readTime: '5'
    }
  ];

  return (
    <>
      <Head>
        <title>{t('blog.badge')} - SparklHaven Cleaning Service</title>
        <meta 
          name="description" 
          content={t('blog.subtitle')}
        />
        <link rel="canonical" href="https://sparklhavencleaningservice.com/blog" />
      </Head>

      <div className="min-h-screen bg-white pt-24 pb-16" id="blog">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#001b3c] mb-3 md:mt-15">
              {t('blog.title')}
            </h1>
            <p className="text-gray-600">
              {t('blog.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article 
                  className="border-b border-gray-200 pb-6 hover:border-[#62d517] transition-all"
                  style={{
                    animation: `fadeIn 0.4s ease-out ${index * 0.05}s both`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="px-2 py-1 bg-[#62d517]/10 text-[#62d517] rounded ring-1 ring-gray-300">
                          {t(post.categoryKey)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock />
                          {post.readTime} {t('blog.readTime')}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-[#001b3c] mb-2 group-hover:text-[#62d517] transition-colors">
                        {t(post.titleKey)}
                      </h2>

                      <p className="text-gray-600 text-sm mb-3">
                        {t(post.descKey)}
                      </p>

                      <span className="inline-flex items-center gap-2 text-[#62d517] text-sm font-semibold group-hover:gap-3 transition-all">
                        {t('blog.readMore')}
                        <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 ring-1 ring-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#001b3c] mb-2">
              {t('blog.cta.title')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t('blog.cta.subtitle')}
            </p>
            <Link 
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#62d517] hover:bg-[#62d517]/90 text-white font-semibold rounded-lg transition-all"
            >
              {t('blog.cta.button')}
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
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