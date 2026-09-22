# 🚀 Web-старт — Лендинг курса

Одностраничный сайт для продажи онлайн-курса по основам веб-программирования.
Построен на **Bootstrap 5.3.8** с адаптивной вёрсткой и формой покупки.

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
├── index.html
├── README.md
└── assets/
    ├── oferta.html
    ├── privacy.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── form.js
    └── img/
        ├── favicon/
        │   └── logo.png
        └── screenshots/
            ├── screenshot-code.jpg
            ├── screenshot-main.jpg
            ├── screenshot-module.jpg
            └── screenshot-project.jpg
```

---

## 🚀 Быстрый старт

### Локально

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/ВАШ_ЛОГИН/landing.git
   ```

2. Откройте `index.html` в браузере.

### Через локальный сервер (рекомендуется)

```bash
# Python
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
- **JavaScript** — валидация формы

---

## ⚙️ Что нужно настроить

**Форма покупки (`assets/js/form.js`)**

Сейчас выводит `alert`. Замените на `fetch`-запрос к вашему сервису приёма заявок (Яндекс Форма, GetCourse и т.д.).

**Документы**

Заполните `oferta.html` и `privacy.html` реальными данными (ФИО, ИНН, контакты).

**Скриншоты**

Замените заглушки на реальные изображения курса.

---

## 🌐 Деплой на GitHub Pages

1. Зайдите в **Settings → Pages**.
2. В разделе **Source** выберите ветку `main` и папку `/ (root)`.
3. Сохраните — сайт будет доступен по адресу:

   ```
   https://ВАШ_ЛОГИН.github.io/landing/
   ```

---

## 📞 Контакты

- 📧 [course.webstart@gmail.com](mailto:course.webstart@gmail.com)
- 📧 [course.webstart@mail.ru](mailto:course.webstart@mail.ru)
- 📝 [Форма обратной связи](https://forms.yandex.ru/u/6a59d6a51f1eb5581e1aad88/)

---

## 📄 Лицензия

© 2026 Учебный курс «Основы веб-программирования».
Все материалы предназначены для личного использования.