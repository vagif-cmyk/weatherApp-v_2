import humidity from "../assets/img/humidity.svg";
import barometr from "../assets/img/barometr.svg";
import visibility from "../assets/img/visibility.svg";
import sunrise from "../assets/img/sunrise.svg";
import sunset from "../assets/img/sunset.svg";
import direction from "../assets/img/direction.svg";

import fewClouds from "../assets/img/02d.svg";
import clouds from "../assets/img/04d.svg";

export const details = [
  {
    title: "Влажность",
    imgSrc: humidity,
    value: 75,
    pbValue: 62.7,
    units: "%",
    min: 0,
    max: 100,
  },
  {
    title: "Давление",
    imgSrc: barometr,
    value: 761,
    pbValue: 76.2,
    gradientPb: true,
    description: "Повышенное",
  },
  {
    title: "Видимость",
    imgSrc: visibility,
    value: 28,
    pbValue: 24.6,
    units: "км",
    description: "Нормальная",
  },
  {
    title: "Рассвет",
    imgSrc: sunrise,
    value: "8:42",
    description: "Прошло: 02:47",
  },
  {
    title: "Закат",
    imgSrc: sunset,
    value: "16:37",
    description: "Осталось: 05:08",
  },
  {
    title: "Сила ветра",
    imgSrc: direction,
    value: 2,
    units: "м/с",
    description: "Северо-западный",
  },
];

export const forecast = {
  tabs: [
    {
      name: "hourly",
      label: "на 24 часа",
    },
    {
      name: "daily",
      label: "на 5 дней",
    },
  ],
  hourly: [
    {
      time: "12:00",
      imgSrc: clouds,
      temp: "-7°",
      description: "облачно",
    },
    {
      time: "15:00",
      imgSrc: clouds,
      temp: "-5°",
      description: "облачно",
    },
    {
      time: "18:00",
      imgSrc: clouds,
      temp: "-7°",
      description: "облачно",
    },
    {
      time: "21:00",
      imgSrc: clouds,
      temp: "-9°",
      description: "облачно",
    },
    {
      time: "00:00",
      imgSrc: clouds,
      temp: "-11°",
      description: "облачно",
    },
    {
      time: "03:00",
      imgSrc: clouds,
      temp: "-13°",
      description: "облачно",
    },
    {
      time: "06:00",
      imgSrc: clouds,
      temp: "-15°",
      description: "облачно",
    },
    {
      time: "09:00",
      imgSrc: clouds,
      temp: "-17°",
      description: "облачно",
    },
  ],
  daily: [
    {
      date: "Вс, 07 янв.",
      imgSrc: fewClouds,
      temp: "от -17° до -11°",
      description: "переменная облачность",
    },
    {
      date: "Пн, 08 янв.",
      imgSrc: fewClouds,
      temp: "от -16° до -8°",
      description: "переменная облачность",
    },
    {
      date: "Вт, 09 янв.",
      imgSrc: clouds,
      temp: "от -8° до -2°",
      description: "облачно",
    },
    {
      date: "Ср, 10 янв.",
      imgSrc: clouds,
      temp: "от -2° до 1°",
      description: "облачно",
    },
    {
      date: "Чт, 11 янв.",
      imgSrc: clouds,
      temp: "от -2° до 1°",
      description: "облачно",
    },
  ],
};
