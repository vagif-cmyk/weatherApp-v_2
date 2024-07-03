import Card from "./Card";
import clsx from "../../utils/clsx";
import styles from "./CardList.module.css";
import { useContext } from "react";
import { CardListContext } from "../../context/cardListContext";

const CardList = () => {
  const {
    humidityCardData,
    pressureCardData,
    visibilityCardData,
    sunriseCardData,
    sunsetCardData,
    windCardData,
  } = useContext(CardListContext);
  return (
    <ul className={clsx("list", styles.list)}>
      <Card
        key={`humidity-card`}
        title={"Влажность"}
        iconType={"humidity"}
        value={humidityCardData.value}
        hasProgressBar={true}
        pbValue={humidityCardData.value}
        units={"%"}
        gradientPb={false}
        min={0}
        max={100}
      />
      <Card
        key={`pressure-card`}
        title={"Давление"}
        iconType={"barometr"}
        value={pressureCardData.value}
        hasProgressBar={true}
        pbValue={pressureCardData.pbValue}
        gradientPb={true}
        description={pressureCardData.description}
      />
      <Card
        key={`visibility-card`}
        title={"Видимость"}
        iconType={"visibility"}
        value={visibilityCardData.value}
        hasProgressBar={true}
        pbValue={visibilityCardData.pbValue}
        units={"км"}
        gradientPb={false}
        description={visibilityCardData.description}
      />
      <Card
        key={`sunrise-card`}
        title={"Рассвет"}
        iconType={"sunrise"}
        value={sunriseCardData.value}
        description={sunriseCardData.description}
      />
      <Card
        key={`sunset-card`}
        title={"Закат"}
        iconType={"sunset"}
        value={sunsetCardData.value}
        description={sunsetCardData.description}
      />
      <Card
        key={`wind-card`}
        title={"Сила ветра"}
        iconType={"direction"}
        value={windCardData.value}
        units={"м/с"}
        imgRotationDeg={windCardData.imgRotationDeg}
        description={windCardData.description}
      />
    </ul>
  );
};

export default CardList;
