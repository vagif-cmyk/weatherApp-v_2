import { createContext } from "react";

export const CardListContext = createContext({
  humidityCardData: {},
  pressureCardData: {},
  visibilityCardData: {},
  sunriseCardData: {},
  sunsetCardData: {},
  windCardData: {},
});
