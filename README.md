# РОБОТА З РЕПОЗИТОРІЄМ

## Матеріали

**Макет:**
https://www.figma.com/file/JJBu6X0fAeZ8CVcwSXSYsD/Portfolio-2.0?type=design&node-id=0-1&mode=design&t=9E8kGDY717SwL0ld-0

**ТЗ:**
https://docs.google.com/spreadsheets/d/1gZC4OK4aKBAQUPEKCySlDVX2_gRaUpRhE6R3-SKHizI/edit#gid=0

**Трелло:**

## Оновіть Node для коректної роботи з терміналом та репозиторієм

Завантажити останню версію: https://nodejs.org/en При встановленні не забудьте
чекбокс:
![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/39a87985-49dd-4722-8b97-2b863b39a0cf)

**Перевірка:** Викликаємо термінал **WIN+R**. пишимо команду **cmd**. У
терміналі прописуємо **node -v** Станом на зараз (10.06.2024 ) остання версія -
**v20.14v0**

## Ознайомтеся з наявними налаштуваннями

Ознайомтеся з наявними стилями у папці css. Деякі налаштування вже були скинуті
у файлі **reset.css.** Також зверніть увагу, що в індексі прописаний модерн
нормалайз, тому можливі деякі конфлікти, де нормалайз перекриватиме ваші стилі.

Перш за все перегляньте вже наявні стилі у **styles.css.** Це допоможе уникнути
дублювання коду, зробити його стислим, чистим, зрозумілим та зменшити кількість
рутинної роботи, а значить заощадити час на найскладніші завдання.

![image](https://github.com/Elijah-Vakulenko/avocado-team/assets/154387383/32df7adb-e4fb-47cf-9104-c1f60a0feb42)

Наприклад, для приховування елементів вже прописані стилі за класом
**is-hidden**, достатньо тільки вказати його при розмітці.

**Виділення заголовків та тексту.** Достатньо просто огорнути необхідний текст у
\<span> без буд'яких класів, колір вже прописаний.
![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/1d25c821-8a9a-4b75-8add-605f14dd864d)

**Заголовки, кнопки, ховер ефекти кнопок вже додані**, так щоб додати ховер
ефект до вашої кнопки просто додайте назву класу **(visit-btn, load-more-btn,
form-btn)** до вашої кнопки:

## Створення гілки

![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/935ea18e-2ce2-4764-881c-a61ab628e580)

або через VS Code

![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/a77b4aa3-7c63-4643-9e2f-6648e162c5cd)

**Feature/назва секції** (наприклад: feature/header feature/reviews), якщо ми
працюємо над виправленням помилок та доопрацюванні називаємо згідно загальної
етики **bugfix/назва секції** (bugfix/hero, bugfix/footer);
![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/759607f0-7f27-4075-bfb7-7d751bf9519b)

Зауважте, що гілка яка вже змерджена до віддаленого репозиторії самостійно
видалиться на сайті, але може залишитися у вас локально, тому **видаляти маєте
вручну**.

## Що з налаштувань треба зробити саме Вам?

1. Створіть html файл у теці **partials** та css файл у теці css (назву обирайте
   відповідно до тієї яка вказана у **index.html та styles.css**).

![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/02f7fb65-a528-49ed-9e29-91864484f4e3)

![image](https://github.com/Elijah-Vakulenko/JS-Team-Project/assets/154387383/f7e333f8-570b-48aa-88fd-032d72266a5c)

3. Розкоментуйте відповідні файли в **index.html та styles.css**
4. Створіть js файли з вашим функціоналом у теці **js** та підключіть їх в
   **main.js** за допомогою import/export
