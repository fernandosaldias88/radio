const API_KEY = '95e558d14c2fa25f59c121db0e91c125';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        temperature: data.main.feels_like + (" °C"),
        date: getDate(),
    }
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
}
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0'+(date.getMonth()+1)).slice(-2)}-${date.getFullYear()}`;
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}