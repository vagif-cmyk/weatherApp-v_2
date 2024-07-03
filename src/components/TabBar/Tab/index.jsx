import clsx from "../../../utils/clsx";
import styles from "./Tab.module.css";

const Tab = ({ active, onClick, children }) => {
  return (
    <li className={styles.tabItem}>
      <button className={clsx("btn", styles.tabBtn, active && styles.active)} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

export default Tab;