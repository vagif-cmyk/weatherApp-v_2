import getCurrentDayIcon from "./getCurrentDayIcon";

export default function prepareSliderList(array, hourlyLimit = 8) {
  const tabs = [
    {
      name: "hourly",
      label: "на 24 часа",
    },
    {
      name: "daily",
      label: "на 5 дней",
    },
  ];
  const hourly = [];
  const daily = [];

  for (const element of array) {
    if (element.dt_txt.split(" ")[1].split(":")[0] === "12") {
      const date = new Date(element.dt_txt).toLocaleString("ru-RU", {
        weekday: "short",
        day: "numeric",
        month: "short",
      });

      const item = {
        date: date[0].toLocaleUpperCase() + date.slice(1),
        imgSrc: getCurrentDayIcon(element.weather[0].icon),
        temp: `от ${Math.round(element.main.temp_min)}° до ${Math.round(
          element.main.temp_max
        )}°`,
        description: element.weather[0].description,
      };
      daily.push(item);
    }

    if (hourlyLimit > 0) {
      const item = {
        time: new Date(element.dt_txt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        imgSrc: getCurrentDayIcon(element.weather[0].icon),
        temp: `${Math.round(element.main.temp)}°`,
        description: element.weather[0].description,
      };

      hourly.push(item);
      hourlyLimit--;
    }
  }
  return { tabs, hourly, daily };
}
