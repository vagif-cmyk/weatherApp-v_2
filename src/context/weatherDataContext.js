import { createContext } from "react";

export const WeatherDataContext = createContext({
  timezoneInMiliecondsFromData: null,
  tempFromData: null,
  tempFeelsFromData: null,
  weatherTypeStrFromData: null,
  weatherTypeIconFromData: null,
  cityNameFromData: null,
  humidityFromData: null,
  pressureFromData: null,
  visibilityFromData: null,
  sunriseInMiliecondsFromData: null,
  sunsetInMiliecondsFromData: null,
  windSpeedFromData: null,
  windDegFromData: null,
});
