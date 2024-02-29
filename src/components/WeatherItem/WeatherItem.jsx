import React from 'react';
import styles from './weatheritem.module.css';

const WeatherItem = ({weather}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.day}>{weather.dayOfWeek}</h3>
      <img src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${weather.icon}.svg`} alt="Icon" />
      <p>{weather.tempmax}°/{weather.tempmin}°</p>
    </div>
  )
}

export default WeatherItem