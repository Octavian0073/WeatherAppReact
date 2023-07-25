import React, { useState, useRef }from 'react';


const CityPicker = (props) => {
  const [cityName, setCityName] = useState('');
  const [cities, setCities] = useState([]);
  const cityNameRef = useRef(null);
  const [weatherData, setWeatherData] = useState({});
  const [locationData, setLocationData] = useState([]);


  function cityWeather(e) {
    e.preventDefault();
    setCityName(e.target.value);
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {setCities(data.results)})
      .catch(function(error) {console.log('request failed', error)})
  }

  function chooseLocation(e) {
    const cityNameInput = cityNameRef.current;
    cityNameInput.value = '';
    const lat = e.currentTarget.getAttribute('data-lat');
    const lon = e.currentTarget.getAttribute('data-lon');
    const place = e.currentTarget.getAttribute('data-place');
    const country = e.currentTarget.getAttribute('data-country');
    setCities([]);
    props.onChangeLocation([place, country]);
    setLocationData([place, country]);
    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`;
    fetch(weatherURL)
      .then((response) => response.json())
      .then((data) => {props.onChangeData(data); setWeatherData(data);})
      .catch(function(error) {console.log('request failed', error)});
  }

    return (
      <div id="findCities" >
        <form className="input-group mx-auto" style={{width: 500 + 'px'}}>
          <input type="text" id="cityInput" className="form-control" ref={cityNameRef} placeholder="Enter a city" aria-label="Enter a city" aria-describedby="basic-addon2" onChange={cityWeather}/> 
        </form>
        <ul className="list-group cities" style={{width: 500 + 'px'}}>
          {
            cities === undefined ? ( <></> ) : (
              cities.map((place) => (
                <li
                  className="list-group-item listItem"
                  key={place.id}
                  data-place={place.name}
                  data-country={place.country}
                  data-lat={place.latitude.toFixed(2)}
                  data-lon={place.longitude.toFixed(2)}
                  data-elevation={place.elevation}
                  onClick={chooseLocation}
                >
                  <a>
                    {place.name} {' '}
                    <small>
                      {place.country} ({place.latitude.toFixed(2)}°E{' '}
                      {place.longitude.toFixed(2)}°N {place.elevation}m asl)
                    </small>
                  </a>
                </li>
              ))
            )
          }
        </ul>
      </div>
    );
}

export default CityPicker;

