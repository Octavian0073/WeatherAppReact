import React from 'react';
import HourSVG from './HourSVG';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import OwlCarousel from 'react-owl-carousel';  

const Carousel = (props) => {
    const weatherData = props.weatherData;
    const currentTime = props.currentTime;
    const celsius = weatherData.hourly_units.temperature_2m;
    const hourlyTemp = weatherData.hourly.temperature_2m;
    const timeArray = weatherData.hourly.time;

    const indexOfNow = timeArray.findIndex(item => item === currentTime);

    const timeFromNow = timeArray.slice(indexOfNow, indexOfNow + 24);
    const tempFromNow = hourlyTemp.slice(indexOfNow, indexOfNow + 24);

    const hoursFromNow = timeFromNow.map((time) => {
        const date = new Date(time);
        const hour = date.getHours().toString().padStart(2, '0');
        return {hour};
    })

    return (
        <OwlCarousel 
        items={8}  
        className="owl-theme"  
        margin={8}
        >
            {
                hoursFromNow.map((hour, i ) => (
                    <div className="hourlyCard">
                        <span className="hour">{hour['hour']===hoursFromNow['0']['hour']?'Now':hour['hour']}</span>
                            <HourSVG weatherData = {weatherData} indexOfNow = {indexOfNow} i={i}/>
                        <span className="hourlyTemp">{Math.round(tempFromNow[i])}{celsius}</span>
                    </div>
                ))   
            }
        </OwlCarousel>
    );
}

export default Carousel;
