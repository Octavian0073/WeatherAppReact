import React from 'react';
import MainWeather from './MainWeather';
import DetailedWeather from './DetailedWeather';

const WeatherContainer = (props) => { 
    const weatherData = props.weatherData;
    const locationData = props.locationData;

    return (
        <div id="weatherContainer">
            <MainWeather 
             weatherData={weatherData} 
             locationData={locationData}
            />
            <DetailedWeather weatherData={weatherData}/>
        </div> 
    );
}

export default WeatherContainer;
