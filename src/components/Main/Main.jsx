import { useContext } from "react";
import { CityCard } from "../CityCard/CityCard";
import { CityList } from "../CityList/CityList";

import styles from "./main.module.css";
import { Context } from "../../context/AppContext";

export const Main = () => {
  const { searchOpen } = useContext(Context);
  const style = `${styles.main} ${searchOpen ? 'filter' : ""}`;
  return (
    <main className={style}>
      <CityCard />
      <CityList />
    </main>
  );
};
