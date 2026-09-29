# 🚀 Web-старт — Лендинг курса

Одностраничный сайт для продажи онлайн-курса по основам веб-программирования.
Построен на **Bootstrap 5.3.8** с адаптивной вёрсткой, формой покупки и SEO-оптимизацией.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 О проекте

Лендинг создан для продажи курса **«Web-старт»** — обучения веб-программированию с нуля (HTML, CSS, JavaScript, Python, PHP).

**Что есть на странице:**

- Hero-блок с призывом к действию
- Программа курса (6 модулей + итоговый проект)
- Преимущества и отзывы
- FAQ (аккордеон)
- Форма покупки с валидацией
- Публичная оферта и политика конфиденциальности

---

## 📁 Структура проекта

```
webdev-landing/                 ← корень репозитория
├── index.html                  ← лендинг (главная)
├── README.md
├── robots.txt                  ← для поисковых роботов
├── sitemap.xml                 ← карта сайта
└── assets/
    ├── pages/
    │   ├── oferta.html         ← публичная оферта
    │   └── privacy.html        ← политика конфиденциальности
    ├── css/
    │   └── style.css           ← кастомные стили
    ├── js/
    │   └── form.js             ← валидация формы покупки
    └── img/
        ├── favicon/
        │   └── logo.png
        └── screenshots/
            ├── screenshot-code.jpg
            ├── screenshot-main.jpg
            ├── screenshot-module.jpg
            └── screenshot-project.jpg
```

> **Важно:** юридические страницы (`oferta.html`, `privacy.html`) лежат в `assets/pages/`, а не в корне `assets/`. Пути `../css/`, `../img/`, `../../index.html` внутри них рассчитаны именно на это расположение.

---

## 🚀 Быстрый старт

### Локально

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/ВАШ_ЛОГИН/landing.git
   cd landing
   ```

2. Откройте `index.html` в браузере.

### Через локальный сервер (рекомендуется)

```bash
# Python 3
python -m http.server 8000

# Или Node.js
npx serve
```

Откройте: http://localhost:8000

---

## 🛠️ Технологии

- **HTML5** — семантическая разметка
- **CSS3** — кастомные стили
- **Bootstrap 5.3.8** — сетка, компоненты, адаптивность
- **Bootstrap Icons** — иконки
- **JavaScript (ES6+)** — валидация формы

---

## 🔍 SEO

Лендинг оптимизирован для поисковых систем:

- ✅ Уникальный `<title>` (до 60 символов)
- ✅ `<meta name="description">` (до 160 символов)
- ✅ `<meta name="keywords">`
- ✅ **Open Graph** — корректные превью в Telegram, VK, WhatsApp, Facebook
- ✅ **Twitter Cards** — превью в Twitter/X
- ✅ **JSON-LD** структурированные данные (`Course`, `Organization`, `FAQPage`)
- ✅ Семантические теги (`<main>`, `<section>`, `<footer>`)
- ✅ Иерархия заголовков (h1 → h2 → h3)
- ✅ `loading="lazy"` на изображениях
- ✅ `robots.txt` и `sitemap.xml`
- ✅ Адаптивность (мобильный трафик)
- ✅ Валидная вёрстка

### Что нужно настроить под себя

1. **`sitemap.xml`** — замените `https://ВАШ-ДОМЕН/` на ваш реальный домен.
2. **`robots.txt`** — то же самое, укажите URL sitemap.
3. **JSON-LD** — замените `"url"` в схеме `Course` на ваш домен.
4. **Open Graph** — `og:url` и `og:image` должны быть абсолютными URL.

---

## ⚙️ Что нужно настроить

### Форма покупки (`assets/js/form.js`)

Сейчас выводит `alert`. Замените на `fetch`-запрос к вашему сервису приёма заявок (Яндекс Форма, GetCourse, собственный endpoint).

Пример:

```js
await fetch('https://forms.yandex.ru/u/ВАШ_ID/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Документы

Заполните `assets/pages/oferta.html` и `assets/pages/privacy.html` реальными данными (ФИО, ИНН, контакты). Сейчас там уже указаны корректные реквизиты.

### Скриншоты

Замените заглушки `assets/img/screenshots/*.jpg` на реальные изображения курса. Рекомендуемый размер — **1200×800 px**.

---

## 🌐 Деплой на GitHub Pages

1. Зайдите в **Settings → Pages**.
2. В разделе **Source** выберите ветку `main` и папку `/ (root)`.
3. Сохраните — сайт будет доступен по адресу:

   ```
   https://https://ВАШ-ДОМЕН/
   ```

4. **Для SEO:** обновите `sitemap.xml`, `robots.txt`, JSON-LD и Open Graph — замените домен на `https://https://ВАШ-ДОМЕН/`.

---

## 📞 Контакты

- 📧 [course.webstart@gmail.com](mailto:course.webstart@gmail.com)
- 📧 [course.webstart@mail.ru](mailto:course.webstart@mail.ru)
- 📝 [Форма обратной связи](https://forms.yandex.ru/u/6a59d6a51f1eb5581e1aad88/)

---

## 📄 Лицензия

© 2026 Учебный курс «Основы веб-программирования».
Все материалы предназначены для личного использования.