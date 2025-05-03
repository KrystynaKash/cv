import React from 'react';
import '../App.css';

function AboutMe() {
  return (
    <div className="container">
      <div className="card">
        <h1>👩‍💻 Про мене</h1>
        <p>Привіт! Мене звати Христина. Я — студентка другого курсу Комп'ютерних наук. 🌟</p>
        <p>Люблю навчатися новому, пробую себе в сфері фронтенду. Також моєю мрією є спробувати розробляти моделі машинного навчання.</p>
        <p>Я ще не знаю точно ким би мені хотілося працювати, але впевнена, що фронтенд розробка дасть мені багато корисних знань.</p>
      </div>

      <div className="card">
        <h2>🎨 Мої захоплення</h2>
        <ul>
          <li>👾Музика — полюбляю різні жанри, я меломан.</li>
          <li>💻 Програмування — захоплююся новими технологіями та розвитком у цій сфері.</li>
          <li>🚴‍♀️ Спорт — люблю активний відпочинок та заняття спортом на свіжому повітрі, вдома.</li>
        </ul>
      </div>

      <div className="card">
        <h2>📚 Мій досвід</h2>
        <ul>
          <li>HTML & CSS — базовий рівень</li>
          <li>JavaScript — створення інтерактивності</li>
          <li>React — перші проєкти</li>
          <li>С, С++, С# — базовий рівень </li>
          <li>MatchCad — базовий рівень</li>
          <li>Exel — впевнений користувач</li>
          <li>SQL — базовий рівень</li>
        </ul>
      </div>

      <div className="card">
        <h2>🚀 Мої проєкти</h2>
        <h3>🔵 HTML + CSS</h3>
        <ul>
          <li><a href="https://github.com/KrystynaKash/html-basic" target="_blank">Проєкт 1</a></li>
          <li><a href="https://github.com/gptsenior/AnimeWebsite" target="_blank">Проєкт 2</a></li>
        </ul>

        <h3>🟡 JavaScript</h3>
        <ul>
          <li><a href="https://github.com/KrystynaKash/useEffect-lab" target="_blank">Проєкт 1</a></li>
          <li><a href="https://github.com/KrystynaKash/api-gallery" target="_blank">Проєкт 2</a></li>
        </ul>

        <h3>🟢 React</h3>
        <ul>
          <li><a href="https://github.com/KrystynaKash/react-router" target="_blank">Проєкт 1</a></li>
          <li><a href="https://github.com/KrystynaKash/react-first-lab" target="_blank">Проєкт 2</a></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;