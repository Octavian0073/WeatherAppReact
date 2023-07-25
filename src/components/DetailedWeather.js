import React from 'react';
import CurrentForecastSVG from './CurrentForecastSVG';
import SevenDaysForecast from './SevenDaysForecast';
import {getHour, getCurrentHumidity} from '../helpers';

function DetailedWeather(props) {
    const weatherData = props.weatherData;
    const celsius = weatherData.hourly_units.temperature_2m;
    const sunrise = weatherData.daily.sunrise[0];
    const sunset = weatherData.daily.sunset[0];
    const lowTemp = weatherData.daily.temperature_2m_min[0];
    const highTemp = weatherData.daily.temperature_2m_max[0];
    const windSpeed = weatherData.current_weather.windspeed;
    const windSpeedUnit = weatherData.hourly_units.windspeed_10m;
    const humidity = weatherData.hourly.relativehumidity_2m;
    const humidityUnit = weatherData.hourly_units.relativehumidity_2m;

  return (
    <div id="detailedWeather">
        <div id = "today">
            <div id="todayDetails">            
                <div id="sunriseSunset"> 
                    <p className="sunrise noMargin">Sunrise</p>
                    <div>
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"/></g></svg>
                        <span>{getHour(sunrise)}</span>
                    </div>
                    <hr style = {{margin: 0.3+'rem'}}/>
                    <p className="sunset noMargin">Sunset</p>
                    <div>
                        <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/></g></svg>
                        <span>{getHour(sunset)}</span>
                    </div>
                </div>
                <div id="lowHigh">
                    <p className="low noMargin">Low Temp:</p>
                    <span>{Math.round(lowTemp)}{celsius}</span>
                    <hr className="noMargin"/>
                    <p className="high noMargin">High Temp:</p>
                    <span>{Math.round(highTemp)}{celsius}</span>
                </div>
                <div id="windSpeed">
                    <p className="noMargin">Wind Speed</p>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </g></svg>
                    <span>{windSpeed}{windSpeedUnit}</span>
                </div>
            </div>
            <div id="currentWeather">
                <div className="weatherCode">
                    <div className="noMargin">
                        <CurrentForecastSVG weatherData = {weatherData}/>
                    </div>
                </div>
                <hr style={{border: 'none', borderRight: 1+'px solid white', height: 20+'px', width: 0}}/>
                <div className="weatherHumidity">
                    <span className="noMargin">Humidity: {getCurrentHumidity(weatherData, humidity)}{humidityUnit} </span>
                </div>
            </div>
        </div>
        <SevenDaysForecast weatherData = {weatherData}/>
    </div>
  );
}

export default DetailedWeather;
