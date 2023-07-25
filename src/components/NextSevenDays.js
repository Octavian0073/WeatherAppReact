import React from 'react';
import {dayOfWeek} from '../helpers';

const NextSevenDays = (props) => {
  const weatherData = props.weatherData;
  const celsius = weatherData.hourly_units.temperature_2m;
  const dailyMin = weatherData.daily.temperature_2m_min;
  const dailyMax = weatherData.daily.temperature_2m_max;
  const weekDays = weatherData.daily.time;

    
  return (
    <>
      {
        dailyMin.map((dailyMin, i)=>(
          <div className="dailyCard">
            <span className="weekDay">{weekDays[i] === weekDays[0] ? 'Today' : dayOfWeek(weekDays[i])}</span>
            <span className="rangeTemp">{Math.round(dailyMin)}{celsius}<hr className="noMargin"/></span>
            <span className="rangeTemp">{Math.round(dailyMax[i])}{celsius}</span>
          </div>
        ))
      }
    </>
  );
}

export default NextSevenDays;
