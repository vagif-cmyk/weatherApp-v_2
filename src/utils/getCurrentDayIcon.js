import clearDay from "../assets/img/01d.svg";
import clearNight from "../assets/img/01n.svg";
import clearingsCloudsDay from "../assets/img/02d.svg";
import clearingsCloudsNight from "../assets/img/02n.svg";
import partlyCloudyDay from "../assets/img/03d.svg";
import partlyCloudyNight from "../assets/img/03n.svg";
import cloudyDay from "../assets/img/04d.svg";
import cloudyNight from "../assets/img/04n.svg";
import showerDay from "../assets/img/09d.svg";
import showerNight from "../assets/img/09n.svg";
import rainDay from "../assets/img/10d.svg";
import rainNight from "../assets/img/10n.svg";
import stormDay from "../assets/img/11d.svg";
import stormNight from "../assets/img/11n.svg";
import snowDay from "../assets/img/13d.svg";
import snowNight from "../assets/img/13n.svg";
import foggyDay from "../assets/img/50d.svg";
import foggyNight from "../assets/img/50n.svg";

export default function getCurrentDayIcon(value) {
  switch (value) {
    case "01d":
      return clearDay;
    case "01n":
      return clearNight;
    case "02d":
      return clearingsCloudsDay;
    case "02n":
      return clearingsCloudsNight;
    case "03d":
      return partlyCloudyDay;
    case "03n":
      return partlyCloudyNight;
    case "04d":
      return cloudyDay;
    case "04n":
      return cloudyNight;
    case "09d":
      return showerDay;
    case "09n":
      return showerNight;
    case "10d":
      return rainDay;
    case "10n":
      return rainNight;
    case "11d":
      return stormDay;
    case "11n":
      return stormNight;
    case "13d":
      return snowDay;
    case "13n":
      return snowNight;
    case "50d":
      return foggyDay;
    case "50n":
      return foggyNight;
    default:
      return clearDay;
  }
}
