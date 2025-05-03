import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>👋 Вітаю на моєму сайті!</h1>
        <p>Цей сайт — моя візитівка як майбутньої успішної програмістки 💻.</p>
        <p>Тут ти знайдеш інформацію про мене, моє місто, мрії, досвід і проєкти.</p>
        <p>Обожнюю креативити, ділитися ідеями, створювати інтерфейси і вивчати щось нове щодня!</p>
      </div>

      <div className="card">
        <h2>🧭 Як навігувати?</h2>
        <ul>
          <li><strong>Про мене</strong> — більше про мене як людину і студентку</li>
          <li><strong>Моє місто</strong> — цікавеньке про моє рідне місто</li>
          <li><strong>Майбутнє</strong> — мої мрії та плани</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
