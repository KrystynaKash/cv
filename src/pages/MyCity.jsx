import React, { useEffect, useState } from 'react';
import '../App.css';
import { FaTemperatureHigh, FaMapMarkerAlt, FaCloudSun } from 'react-icons/fa';

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=a04bcc98fa4e4871a22112311250305&q=Rivne`)
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div className="container fade-in">
      <div className="card">
        <h1>🏙 Моє місто — Рівне</h1>
        <p>Рівне — це не просто місто, це місце, де поєднуються затишок, історія та сучасність. Тут можна відчути справжню українську гостинність, прогулятися мальовничими парками, відвідати атмосферні кав'ярні та насолодитися спокоєм міських вуличок.</p>
        <p>Рівне має багатий культурний спадок — від театру, що оживляє класичні та сучасні постановки, до музеїв, які зберігають пам’ять про героїчне минуле краю. Особливо чарівно виглядає озеро Басів Кут — улюблене місце відпочинку містян і гостей.</p>
        <p>Це місто, де хочеться жити, навчатися, мріяти і створювати щось нове. Воно спокійне, але з великим потенціалом для змін і розвитку.</p>


      </div>
      <div className="card">
  <h2>🖼 Фотогалерея</h2>
  <div className="gallery">
  <img src="/pics/басівкут.jpg" alt="Озеро Басів Кут" />
    <img src="/pics/собор.jpg" alt="Покровський собор" />
    <img src="/pics/театр.jpg" alt="Драмтеатр у Рівному" />
  </div>
  <h3>📌 Цікаві факти:</h3>
  <ul>
    <li>Місто має понад 700-річну історію.</li>
    <li>Рівне було важливим центром під час визвольної боротьби УПА.</li>
    <li>Тут знаходиться один із найкрасивіших драмтеатрів України.</li>
  </ul>
</div>
      {weather ? (
        <div className="card weather-card">
          <h2><FaCloudSun /> Поточна погода</h2>
          <p><FaTemperatureHigh /> Температура: <strong>{weather.current.temp_c}°C</strong></p>
          <p>☁️ Опис: <em>{weather.current.condition.text}</em></p>
          <p><FaMapMarkerAlt /> Координати: {weather.location.lat}, {weather.location.lon}</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}

      <div className="card">
        <h2>📊 Міні-опитування</h2>
        <p>Чи були ви у Рівному?</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button className="vote-btn yes" onClick={() => setAnswer("ВАУ! Та ви мій земляк!)")}>Так</button>
          <button className="vote-btn no" onClick={() => setAnswer("Ви багато чого втрачаєте!) Білетик туди коштує не багато, але атмосфера спокою та затишку вам забезпечена!")}>Ще ні</button>
        </div>
        {answer && <p className="answer-text">{answer}</p>}
      </div>
    </div>
  );
}

export default MyCity;
