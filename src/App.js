import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);


  const getWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=760c45014cd8a7f41da25c78741db19a&units=metric&lang=pt_BR`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

      const handleKeyPress = (event) => {
        if (event.key === "Enter"){
          getWeather();
        }
      }


  return (

    <div style={{textAlign: 'center'}}>
      <img src="/favicon.png" alt="Logo" style={{ width: '150px' }}/> 
      <header>
        <h1>Previsão do Tempo</h1>
      </header>

      <input
        type="text"
        placeholder="Digite a cidade"
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button onClick={getWeather}>Obter previsão</button>
      {weather && (
        <div>
          <h1>Clima em {weather.name}</h1>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Umidade: {weather.main.humidity}%</p>
          <p>Condição: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};


export default App;