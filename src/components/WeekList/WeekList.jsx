import React, { useEffect, useState } from 'react'
import { getWeatherForDate } from '../../api/getWeatherForDate';
import WeatherItem from '../WeatherItem/WeatherItem';
import styles from './weeklist.module.css'

const WeekList = ({selectedTrip}) => {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    getWeatherForDate(selectedTrip.city, selectedTrip.startDate, selectedTrip.endDate)
      .then((data) => setWeatherList(data))
  }, [selectedTrip.city, selectedTrip.startDate, selectedTrip.endDate])

  return (
    <div className={styles.container}>
      {weatherList.map((weather) => (
        <WeatherItem weather={weather} key={weather.datetime}/>
      ))}
    </div>
  )
}

export default WeekList;