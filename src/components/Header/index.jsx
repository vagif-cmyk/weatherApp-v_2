import { useContext } from "react";
import WeatherSearch from "../WeatherSearch";
import Logo from "../Logo";
import clsx from "../../utils/clsx";
import styles from "./Header.module.css";
import { WeatherSearchContext } from "../../context/weatherSearchContext";

const Header = () => {
  const { isOpen } = useContext(WeatherSearchContext);
  return (
    <header className={clsx(styles.header, isOpen && styles.openHeader)}>
      <Logo />
      <WeatherSearch />
    </header>
  );
};

export default Header;
