import React, {useState} from 'react';
import CityPicker from './CityPicker';
import WeatherContainer from './WeatherContainer';

const Main = () => { 
    const [weatherData, setWeatherData] = useState({});
    const [locationData, setLocationData] = useState([]);

    const handleChangeData = (newData) => {
        setWeatherData(newData);
    }
    
    const handleLocationData = (newData) => {
        setLocationData(newData);
    }

    return (
        <>
            <p className= 'lead mb-1'>Check the weather!</p>
            <CityPicker 
            onChangeData= {handleChangeData}
            onChangeLocation = {handleLocationData}
            />
            {
                Object.keys(weatherData).length!=0&&<WeatherContainer weatherData = {weatherData} locationData = {locationData}/>
            }
             <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
        </>
    );
}

export default Main;
