import React, { useState } from "react";
import './WeatherApp.css';
import search_icon from '../Assets/search1.png';
import wind_icon from '../Assets/wind3.png';
import sunwithcloud_icon from '../Assets/sun.png';
import humidity_icon from '../Assets/humidity1.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import cloud_icon from '../Assets/cloud.png';

export const WeatherApp = () => {
  let api_key = "091822229121762d065bc31341c196ae";
  const [ setWicon] = useState(cloud_icon);

  const Search = async () => {
    const element = document.getElementsByClassName("cityInput")[0];
    const cityName = element.value.trim();

    if (cityName === "") {
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`;

    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      let data = await response.json();

      const humidity = document.getElementsByClassName("humidity-percent")[0];
      const wind = document.getElementsByClassName("wind-rate")[0];
      const temperature = document.getElementsByClassName("weather-temp")[0];
      const location = document.getElementsByClassName("weather-location")[0];

      humidity.innerHTML = data.main.humidity + " %";
      wind.innerHTML = data.wind.speed + " km/h";
      temperature.innerHTML = data.main.temp + " °C";
      location.innerHTML = data.name;

      // Set weather icon based on weather condition
      switch (data.weather[0].icon) {
        case "01d":
        case "01n":
          setWicon(sunwithcloud_icon);
          break;
        case "02d":
        case "02n":
          setWicon(cloud_icon);
          break;
        case "03d":
        case "03n":
          setWicon(drizzle_icon);
          break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          setWicon(rain_icon);
          break;
        case "13d":
        case "13n":
          setWicon(snow_icon);
          break;
        default:
          setWicon(cloud_icon);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search_icon" onClick={Search}>
          <img src={search_icon} alt='' />
        </div>
      </div>
      <div className="weather-image">
        <img src={sunwithcloud_icon} alt='' /> </div>
      <div className="weather-temp">24°C </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;