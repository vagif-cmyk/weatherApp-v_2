import { useContext } from "react";
import getTimeByTimezone from "../utils/getTimeByTimezone";
import formatTimeByMiliseconds from "../utils/formatTimeByMiliseconds";
import { WIND_DIRECTIONS } from "../constants/WIND_DIRECTIONS";
import { WeatherDataContext } from "../context/weatherDataContext";
import { CardListContext } from "../context/cardListContext";

const CardListProvider = ({ children }, ...props) => {
  const {
    humidityFromData,
    pressureFromData,
    visibilityFromData,
    sunriseInMiliecondsFromData,
    sunsetInMiliecondsFromData,
    windSpeedFromData,
    windDegFromData,
    timezoneInMiliecondsFromData,
  } = useContext(WeatherDataContext);

  // pressure (mmHg)
  const convertedPressureValue = Math.round(pressureFromData * 0.75);
  let pressureDescription = "Нормальное";
  if (convertedPressureValue < 740) {
    pressureDescription = "Пониженное";
  } else if (convertedPressureValue > 760) {
    pressureDescription = "Повышенное";
  }
  const pressurePbValue = convertedPressureValue - 700;

  // visibility (km)
  const convertedVisibilityValue = Math.round(visibilityFromData / 1000);
  let visibilityDescription = "Нормальная";
  if (convertedVisibilityValue < 2) {
    visibilityDescription = "Плохая";
  } else if (convertedVisibilityValue > 4) {
    visibilityDescription = "Хорошая";
  }
  const visibilityPbValue = convertedVisibilityValue * 10;

  // sunrise, sunset
  let sunriseTimeStr = "";
  let sunsetTimeStr = "";

  let sunriseDescription = "";
  let sunsetDescription = "";

  let nowDate = null;
  let sunriseDate = null;
  let sunsetDate = null;

  if (timezoneInMiliecondsFromData) {
    nowDate = getTimeByTimezone(timezoneInMiliecondsFromData, new Date());
    sunriseDate = getTimeByTimezone(
      timezoneInMiliecondsFromData,
      new Date(sunriseInMiliecondsFromData)
    );

    sunsetDate = getTimeByTimezone(
      timezoneInMiliecondsFromData,
      new Date(sunsetInMiliecondsFromData)
    );

    sunriseTimeStr = Intl.DateTimeFormat("ru", {
      hour: "numeric",
      minute: "numeric",
    })
      .format(sunriseDate)
      .replace(/^0/, "");

    sunsetTimeStr = Intl.DateTimeFormat("ru", {
      hour: "numeric",
      minute: "numeric",
    })
      .format(sunsetDate)
      .replace(/^0/, "");
  }

  if (nowDate > sunriseDate) {
    sunriseDescription = `Прошло ${formatTimeByMiliseconds(
      nowDate - sunriseDate
    )}`;
  } else if (nowDate < sunriseDate) {
    sunriseDescription = `Осталось ${formatTimeByMiliseconds(
      sunriseDate - nowDate
    )}`;
  }

  if (nowDate > sunsetDate) {
    sunsetDescription = `Прошло ${formatTimeByMiliseconds(
      nowDate - sunsetDate
    )}`;
  } else if (nowDate < sunsetDate) {
    sunsetDescription = `Осталось ${formatTimeByMiliseconds(
      sunsetDate - nowDate
    )}`;
  }

  // wind
  let windDescription = WIND_DIRECTIONS[Math.round(windDegFromData / 45)];

  return (
    <CardListContext.Provider
      value={{
        humidityCardData: { value: humidityFromData },
        pressureCardData: {
          value: convertedPressureValue,
          pbValue: pressurePbValue,
          description: pressureDescription,
        },
        visibilityCardData: {
          value: convertedVisibilityValue,
          pbValue: visibilityPbValue,
          description: visibilityDescription,
        },
        sunriseCardData: {
          value: sunriseTimeStr,
          description: sunriseDescription,
        },
        sunsetCardData: {
          value: sunsetTimeStr,
          pbValue: sunsetDescription,
          description: sunsetDescription,
        },
        windCardData: {
          value: Math.round(windSpeedFromData),
          imgRotationDeg: windDegFromData + 45 + 180,
          description: windDescription,
        },
      }}
      {...props}
    >
      {children}
    </CardListContext.Provider>
  );
};

export default CardListProvider;
