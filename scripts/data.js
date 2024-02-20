export const dataCard = [
  {
    title: "Влажность",
    icon: "./public/svg/humidity.svg",
    mainInfo: "75 %",
    desc: { text: "0%", extraText: "100%" },
    barometer: true,
    specialBarometer: false,
  },
  {
    title: "Давление",
    icon: "./public/svg/barometer.svg",
    mainInfo: "761",
    desc: { text: "Повышенное", extraText: "" },
    barometer: true,
    specialBarometer: true,
  },
  {
    title: "Видимость",
    icon: "./public/svg/eye.svg",
    mainInfo: "28 км",
    desc: { text: "Нормальная", extraText: "" },
    barometer: true,
    specialBarometer: false,
  },
  {
    title: "Рассвет",
    icon: "./public/svg/sunrise.svg",
    mainInfo: "8:42",
    desc: { text: "Прошло: 02:47", extraText: "" },
    barometer: false,
  },
  {
    title: "Закат",
    icon: "./public/svg/sunset.svg",
    mainInfo: "16:37",
    desc: { text: "Осталось: 05:08", extraText: "" },
    barometer: false,
  },
  {
    title: "Сила ветра",
    icon: "./public/svg/direction.svg",
    mainInfo: "2 м/с",
    desc: { text: "Северо-западный", extraText: "" },
    barometer: false,
  },
];

export const details = {
  hourly: [
    { time: "00:00", icon: "./public/png/clouds.png", temp: "-7°" },
    { time: "03:00", icon: "./public/png/clouds.png", temp: "9°" },
    { time: "06:00", icon: "./public/png/clouds.png", temp: "12°" },
    { time: "09:00", icon: "./public/png/clouds.png", temp: "12°" },
    { time: "12:00", icon: "./public/png/clouds.png", temp: "13°" },
    { time: "12:00", icon: "./public/png/clouds.png", temp: "13°" },
    { time: "12:00", icon: "./public/png/clouds.png", temp: "13°" },
    { time: "12:00", icon: "./public/png/clouds.png", temp: "13°" },
    { time: "12:00", icon: "./public/png/clouds.png", temp: "13°" },
  ],
  weekly: [
    {
      date: "Вс, 07 янв.",
      icon: "./public/png/day-few-clouds.png",
      temp: "от -17° до -11°",
    },
    {
      date: "Пн, 08 янв.",
      icon: "./public/png/day-few-clouds.png",
      temp: "от -16° до -8°",
    },
    {
      date: "Вт, 09 янв.",
      icon: "./public/png/day-few-clouds.png",
      temp: "от -8° до -2°",
    },
    {
      date: "Вт, 09 янв.",
      icon: "./public/png/day-few-clouds.png",
      temp: "от -8° до -2°",
    },
    {
      date: "Вт, 09 янв.",
      icon: "./public/png/day-few-clouds.png",
      temp: "от -8° до -2°",
    },
  ],
};
