# Coffee House — Landing Page

Учебный проект в рамках курса **RS School (Fullstack Engineering)**: адаптивный двухстраничный сайт кофейни «Coffee House» по готовому макету Figma (Coffee House 2026Q3).

**Часть 2 — «Функциональность».**

- **Макет Figma:** [Coffee House 2026Q3](https://www.figma.com/design/yuc5s9NCc4jENkk5LdFfvX/Coffee-House-2026Q3?node-id=0-1)


## Что реализовано (Часть 1)

- Две связанные страницы с разными URL: главная (`index.html`) и каталог (`menu.html`).
- Единообразные `header` и `footer` на обеих страницах.
- Семантическая навигация `nav > ul > li > a` с якорями на секции главной и плавной прокруткой.
- Переключатель светлой и тёмной темы с сохранением выбора в `localStorage` (работает одинаково на обеих страницах, состояние переключателя соответствует теме).
- Кнопка бургер-меню - не работает.
- Главная страница.
- Каталог: 3 категории (Coffee, Tea, Dessert).
- Адаптивная вёрстка


## Структура:

```
rsschool-landing-page/
├── index.html              # главная страница
├── menu.html               # страница каталога
├── styles/
│   ├── variables.css       # базовые стили, контейнер
│   ├── common.css          # header, footer, кнопки, переключатель темы
│   ├── home.css            # стили домашней страницы
│   └── menu.css            # стили меню
├── scripts/
│   └── theme.js            # тема
│   └── slider.js           # слайдер на гл странице  
└── assets/
    ├── icons/              # логотипы 
    └── images/             # иные фото 
```


