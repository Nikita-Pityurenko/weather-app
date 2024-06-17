import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather({ city }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const apiKey = 'fe89545da74baa50a6f7ef91bba9a701';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${apiKey}&units=metric`;

        axios.get(url)
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => {
                console.error('Помилка при отриманні даних о погоді:', error);
            });
    }, [city]);

    if (!weather) {
        return <div>Завантаження...</div>;
    }

    return (
        <div className="weather-container">
            <h2>Погода в {city}</h2>
            <p>Температура: {weather.main.temp}°C</p>
            <p>Опис: {weather.weather[0].description}</p>
            <p>Вологість: {weather.main.humidity}%</p>
            <p>Швидкість вітру: {weather.wind.speed} м/с</p>
        </div>
    );
}

export default Weather;
