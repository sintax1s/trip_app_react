import { convertToCelsius } from "../utils/convertToCelsius";
import { getDayOfWeek } from "../utils/getDayOfWeek";

export async function getWeatherForDate(city, startDate, endDate) {
  try {
    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?key=${process.env.REACT_APP_API_KEY}`);
    const weather = await res.json();

    const weatherCelcius = weather.days.map((item) => {
      return {
        ...item, 
        temp: convertToCelsius(item.temp), 
        tempmax: convertToCelsius(item.tempmax), 
        tempmin: convertToCelsius(item.tempmin),
        dayOfWeek: getDayOfWeek(item.datetime),
      }
    })

    return weatherCelcius;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}