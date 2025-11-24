import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      questionKey: 'faq.question1',
      answerKey: 'faq.answer1',
      icon: '🏡'
    },
    {
      questionKey: 'faq.question2',
      answerKey: 'faq.answer2',
      icon: '🌿'
    },
    {
      questionKey: 'faq.question3',
      answerKey: 'faq.answer3',
      icon: '🏢'
    },
    {
      questionKey: 'faq.question4',
      answerKey: 'faq.answer4',
      icon: '📦'
    },
    {
      questionKey: 'faq.question5',
      answerKey: 'faq.answer5',
      icon: '📅'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-16 md:py-24 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <div
            className={`inline-flex items-center gap-2 rounded-full text-xs sm:text-sm font-medium px-3 py-1.5 mb-4 ${
              isDarkMode
                ? 'bg-blue-500/10 ring-1 ring-blue-500/30 text-blue-400'
                : 'bg-blue-600/10 ring-1 ring-blue-600/30 text-blue-900'
            }`}
          >
            <span>❓</span> <span>{t('faq.badge')}</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('faq.title')}
          </h2>

          <p
            className={`text-base md:text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800/50 ring-1 ring-gray-700/50'
                  : 'bg-white ring-1 ring-gray-200 shadow-sm'
              } ${openIndex === index ? 'ring-2 ' + (isDarkMode ? 'ring-blue-500/50' : 'ring-blue-500/30') : ''}`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left transition-colors duration-300 ${
                  isDarkMode
                    ? 'hover:bg-gray-700/30'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4 flex-1">
                  <span className="text-2xl md:text-3xl flex-shrink-0 mt-1">
                    {faq.icon}
                  </span>
                  <h3
                    className={`font-semibold text-base md:text-lg leading-relaxed ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {t(faq.questionKey)}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div
                  className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  } ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out p-5 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className={`px-5 md:px-6 pb-5 md:pb-6 pt-0 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <div
                    className={`pl-10 md:pl-14 border-l-2 ${
                      isDarkMode
                        ? 'border-blue-500/30 text-gray-300'
                        : 'border-blue-300 text-gray-700'
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed">
                      {t(faq.answerKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-12 md:mt-16 text-center p-6 md:p-8 rounded-2xl ${
            isDarkMode
              ? 'bg-blue-500/10 ring-1 ring-blue-500/30'
              : 'bg-blue-50 ring-1 ring-blue-200'
          }`}
        >
          <h3
            className={`text-xl md:text-2xl font-bold mb-3 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('faq.cta.title')}
          </h3>
          <p
            className={`text-sm md:text-base mb-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t('faq.cta.subtitle')}
          </p>
          <a
            href="tel:+14254765411"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
          >
            📞 {t('faq.cta.button')}
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
      `}</style>
    </section>
  );
};

export default FAQ;