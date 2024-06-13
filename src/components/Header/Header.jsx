import { useContext } from "react";
import { Logo } from "../UI";
import styles from "./header.module.css";
import getCityData from "../../api/getCityData";
import { Context } from "../../context/AppContext";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import { HeadContext } from "../../context/HeaderContext";
import { Storage } from "../../utils/localStorage";
import prepareArray from "../../utils/prepareArray";
import DropdownContent from "../DropdownContent/DropdownContent";
import getWeatherData from "../../api/getWeatherData";

export const Header = () => {
  const { value, isLoading, setIsLoading, setCityData, setSearchOpen } =
    useContext(Context);
  const { setLocalData, setDropDownContent } = useContext(HeadContext);

  const onChooseCity = async (e, lat, lon) => {
    e.stopPropagation();
    setSearchOpen(false);
    const weatherData = await getWeatherData(lat, lon);
    setCityData(null);
    console.log(weatherData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || !value) return;
    setIsLoading(true);
    setDropDownContent(<DropdownContent title={"Ищем..."} />);
    try {
      const cityData = await getCityData(value);
      if (!cityData.length) {
        setDropDownContent(
          <DropdownContent
            title={"Упс! Город не найден"}
            items={[{ name: "Попробуйте другое название" }]}
            className={"notFound"}
          />
        );
        return;
      } else {
        setCityData(cityData);
        setDropDownContent(
          <DropdownContent
            title={"Результат поиска"}
            items={[
              {
                name: cityData[0].name,
                lat: cityData[0].lat,
                lon: cityData[0].lon,
              },
            ]}
            className={"item"}
            onChoose={onChooseCity}
          />
        );
      }
      const newCityData = {
        name: cityData[0].name,
        lat: cityData[0].lat,
        lon: cityData[0].lon,
      };

      Storage.put("cities", newCityData);
      setLocalData((prev) => prepareArray(newCityData, prev));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Отсутствует связь со сторонним сервисом");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className={`${styles.header}`}>
      <Logo className={styles.logo} />
      <form onSubmit={onSubmit}>
        <WeatherSearch onChooseCity={onChooseCity} />
      </form>
    </header>
  );
};
