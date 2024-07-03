import { useEffect } from "react";
import clsx from "../../utils/clsx";
import Tab from "./Tab";
import styles from "./TabBar.module.css";

const TabBar = ({ items, activeItem, onTabClick }) => {
  useEffect(() => {
    setTimeout(() => {
      onTabClick(items[0]);
    }, 100);
    //eslint-disable-next-line
  }, []);

  return (
    <ul className={clsx("list", styles.tabBar)}>
      {items.map((item) => (
        <Tab
          key={item.name}
          onClick={() => onTabClick(item)}
          active={item.name === activeItem?.name}
        >
          {item.label}
        </Tab>
      ))}
    </ul>
  );
};

export default TabBar;
