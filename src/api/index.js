import { cityURL, weatherDailyURL, weatherURL } from "./const";

const apiKey = process.env.REACT_APP_KEY || "03b0c52c692867aaeeb0766652750336";

export class Api {
  static async get(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      throw Error("Отсутствует связь со сторонним сервисом");
    }
  }

  static async getCity(value) {
    const url = `${cityURL}?q=${value}&format=json&addressdetails=1&limit=1`;
    try {
      const cityData = await Api.get(url);
      if (cityData.length === 0) {
        throw Error("Упс! Город не найден, попробуйте другой");
      }
      return cityData;
    } catch (e) {
      throw Error(e.message);
    }
  }

  static async getCityWeatherData(value) {
    try {
      const url = `${cityURL}?q=${value}&format=json&addressdetails=1&limit=1`;
      const cityData = await Api.get(url);
      const urlDetail = `${weatherURL}?lat=${cityData[0].lat}&lon=${cityData[0].lon}&appid=${apiKey}&units=metric&lang=ru`;
      const result = await Api.get(urlDetail);
      return result;
    } catch (e) {
      throw Error(e.message);
    }
  }
  static async getWeatherDaily(lat, lon) {
    if (!lat || !lon) return Promise.reject("Ошибка получения координат");
    const url = `${weatherDailyURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;
    return Api.get(url);
  }
}
