import { getDayOfWeek } from "../utils/getDayOfWeek";

export async function getWeatherForToday(city) {
  try {
    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${process.env.REACT_APP_API_KEY}&contentType=json`);
    const weather = await res.json();

    return {...weather.days[0], dayOfWeek: getDayOfWeek(weather.days[0].datetime)};
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}