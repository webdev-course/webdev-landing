// ============================================
// SEO: структурированные данные (JSON-LD)
// ============================================
// Вставляет <script type="application/ld+json"> в <head>.
// Подключение в index.html:
//   <script src="assets/js/meta.js" defer></script>
// ============================================

(function () {
  'use strict';

  // Базовый URL сайта — меняйте здесь, если сменится домен.
  const SITE_URL = 'https://webdev-course.github.io/webdev-landing/';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'Основы веб-программирования',
        description:
          'Курс веб-программирования для новичков: HTML, CSS, JavaScript, Python, PHP. 6 модулей, 16 недель, итоговый проект.',
        url: SITE_URL,
        image: SITE_URL + 'assets/img/screenshots/screenshot-main.jpg',
        provider: {
          '@type': 'Organization',
          name: 'Web-старт',
          url: SITE_URL,
          logo: SITE_URL + 'assets/img/favicon/logo.png',
          email: 'course.webstart@gmail.com',
        },
        offers: {
          '@type': 'Offer',
          price: '4900',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
          url: SITE_URL + '#pricing',
          category: 'Paid',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: 'PT4H',
          inLanguage: 'ru',
        },
      },
      {
        '@type': 'Organization',
        name: 'Web-старт',
        url: SITE_URL,
        logo: SITE_URL + 'assets/img/favicon/logo.png',
        email: 'course.webstart@gmail.com',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'course.webstart@gmail.com',
          contactType: 'customer support',
          availableLanguage: 'Russian',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Какие знания нужны для начала?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Никаких. Курс создан для абсолютных новичков. Всё объясняется с самых азов.',
            },
          },
          {
            '@type': 'Question',
            name: 'Как я получу курс после оплаты?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'После оплаты вы получите письмо со ссылкой на скачивание ZIP-архива. Распакуйте архив и откройте index.html в браузере.',
            },
          },
          {
            '@type': 'Question',
            name: 'Нужен ли интернет для прохождения курса?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Нет, курс работает офлайн. Все материалы — HTML-файлы, которые открываются в браузере.',
            },
          },
          {
            '@type': 'Question',
            name: 'Сколько времени займёт прохождение?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Курс рассчитан на 16 недель при нагрузке 4–6 часов в неделю.',
            },
          },
          {
            '@type': 'Question',
            name: 'Можно ли получить возврат?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да, если курс не подошёл — напишите в течение 14 дней после покупки на course.webstart@gmail.com, и мы вернём деньги.',
            },
          },
          {
            '@type': 'Question',
            name: 'Будут ли обновления курса?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да, курс будет обновляться. Покупатели получают обновления бесплатно по email.',
            },
          },
        ],
      },
    ],
  };

  function injectStructuredData() {
    // Защита от повторной вставки, если meta.js подключён дважды
    if (document.querySelector('script[data-meta-ld]')) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-meta-ld', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStructuredData);
  } else {
    injectStructuredData();
  }
})();