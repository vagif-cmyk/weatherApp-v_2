import { useContext, useState } from "react";
import CardList from "../CardList";
import CityCard from "../CityCard";
import Slider from "../Slider";
import TabBar from "../TabBar";
import { details } from "../../constants/mockData";
import clsx from "../../utils/clsx";
import styles from "./Main.module.css";
import CardListProvider from "../../providers/CardListProvider";
import { WeatherDataContext } from "../../context/weatherDataContext";
const Main = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { sliderList } = useContext(WeatherDataContext);

  return (
    <main className={styles.main}>
      <CityCard />
      <section className={styles.details}>
        <CardListProvider>
          <CardList data={details} />
        </CardListProvider>
      </section>
      <section className={styles.forecast}>
        <header className={styles.forecastHeader}>
          <h2 className={clsx("title section-title", styles.forecastTitle)}>
            Прогноз:
          </h2>
          <nav className={styles.forecastNav}>
            <TabBar
              items={sliderList.tabs}
              activeItem={activeTab}
              onTabClick={(item) => setActiveTab(item)}
            />
          </nav>
        </header>
        <Slider key={activeTab?.name} items={sliderList[activeTab?.name]} />
      </section>
    </main>
  );
};

export default Main;
