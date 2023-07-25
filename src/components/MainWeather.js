import React, {useEffect} from 'react';
import Carousel from './Carousel';
import {formatDate, apparentTemp} from '../helpers';

const MainWeather = (props) => {
  const weatherData = props.weatherData;
  const locationData = props.locationData;
  const currentTemperature = weatherData.current_weather.temperature;
  const celsius = weatherData.hourly_units.temperature_2m;
  const currentTime = weatherData.current_weather.time;

// useEffect(()=> {
//   $(() => {
//     // Owl Carousel
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//       items: 1,
//       margin: 10,
//       loop: false,
//       nav: false
//     });
//   });
// },[]);

  return (
    <div id="mainWeather">                  
      <h1 className= 'display-6 mt noMargin'>{locationData[0]}</h1>
      <span >{locationData[1]}</span>
      <hr style = {{margin: 0.4 + 'rem'}}/>
      <h2 className= 'display-7 mt noMargin'>Today</h2>
      
      <span style={{display: 'block', fontSize: 'small'}}>{formatDate(currentTime)}</span>
      <span className= 'display-3 mt temp'>{Math.round(currentTemperature)}{celsius}</span>
      <span style={{fontSize: 'smaller', opacity: 0.7}}>Feels like <span>{Math.round(apparentTemp(weatherData))}{celsius}</span></span>

      <div id="carouselContainer">
        <div className="carousel">
          <Carousel weatherData = {weatherData} currentTime = {currentTime}/>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
