const getWeatherData = async (lat, lon) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ru`);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default getWeatherData;