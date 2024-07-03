import clsx from "../../utils/clsx";
import formatTemp from "../../utils/formatTemp";
import upperCaseFirst from "../../utils/upperCaseFirst";
import getTimeByTimezone from "../../utils/getTimeByTimezone";

import { useContext } from "react";
import Icon from "../Icon";
import styles from "./CityCard.module.css";
import { WeatherDataContext } from "../../context/weatherDataContext";

const CityCard = () => {
  const {
    timezoneInMiliecondsFromData,
    tempFromData,
    tempFeelsFromData,
    weatherTypeStrFromData,
    weatherTypeIconFromData,
    cityNameFromData,
  } = useContext(WeatherDataContext);

  const timeWithTimezone = getTimeByTimezone(timezoneInMiliecondsFromData);

  const date = upperCaseFirst(
    Intl.DateTimeFormat("ru", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    }).format(timeWithTimezone)
  );

  const time = Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
  }).format(timeWithTimezone);

  const temp = formatTemp(tempFromData);
  const tempFeels = formatTemp(tempFeelsFromData);

  const weatherTypeStr = upperCaseFirst(weatherTypeStrFromData);

  return (
    <section className={styles.citycard}>
      <h1 className={clsx("title section-title", styles.city)}>
        {cityNameFromData}
      </h1>
      <span className={styles.date}>{date}</span>
      <span className={styles.time}>{time}</span>
      <span className={styles.tempFact}>{temp}°</span>
      <span className={styles.condition}>
        <Icon type={weatherTypeIconFromData} className={styles.conditionImg} />
        {weatherTypeStr}
      </span>
      <span className={styles.tempFeelsLike}>Ощущается как {tempFeels}°</span>
    </section>
  );
};

export default CityCard;
