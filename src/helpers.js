export function getCurrentHumidity(data, arr) {
    const hourlyTime = data.hourly.time;
    const currentTime = data.current_weather.time;
    const indexOfNow = hourlyTime.findIndex(item => item === currentTime);
    const currentHumidity = arr[indexOfNow];

    return currentHumidity;
}

export function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

export function formatDate(date) {
    const getDate = new Date(date); 
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = getDate.toLocaleDateString('en-US', options);

    return formattedDate;
}

export function dayOfWeek(date) {
    const getDate = new Date(date); 
    const options = { weekday: 'short' };
    const dayOfWeek = getDate.toLocaleDateString('en-US', options);

    return dayOfWeek;
}

export function getHour(time) {
    const getHour = new Date(time);
    const hour = getHour.getHours().toString().padStart(2, '0');
    const minutes = getHour.getMinutes().toString().padStart(2, '0');

    return `${hour}:${minutes}`;
}

export function apparentTemp(data) {
    const currentTime = data.current_weather.time;
    const hourlyTime = data.hourly.time;
    const index = hourlyTime.findIndex(item => item === currentTime);
    const apparentTemperature = data.hourly.apparent_temperature[index];

    return apparentTemperature;
}
