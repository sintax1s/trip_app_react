import React, { useEffect, useState } from 'react'
import { getWeatherForToday } from '../../api/getWeatherForToday';
import styles from './weatherscreen.module.css';

const WeatherScreen = ({selectedTrip}) => {
  const [weather, setWeather] = useState({});
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const startDateMillis = new Date(selectedTrip.startDate).getTime();
      const timeDiff = startDateMillis - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, [selectedTrip.startDate]);

  useEffect(() => {
    getWeatherForToday(selectedTrip.city)
      .then((data) => setWeather(data))
  }, [selectedTrip.city])

  const timerArr = [
    { name: 'DAYS', value: timeRemaining.days },
    { name: 'HOURS', value: timeRemaining.hours },
    { name: 'MINUTES', value: timeRemaining.minutes },
    { name: 'SECONDS', value: timeRemaining.seconds },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.weatherInfo}>
        <p>{weather.dayOfWeek}</p>
        <div className={styles.weatherBriefly}>
          <img 
            src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${weather.icon}.svg`} 
            alt="Weather Icon" 
            className={styles.weatherImage}
          />
          <p className={styles.temp}>{!isNaN(weather.temp) ? Math.floor(weather.temp) : 'N/A'}</p>
          <p>°C</p>
        </div>
        <p>{selectedTrip.city}</p>
      </div>
      <div className={styles.timer}>
        {timerArr.map(({name, value }) => (
          <div className={styles.timerField} key={name}>
            <p className={styles.timeValue}>{value}</p>
            <p className={styles.timeName}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherScreen;