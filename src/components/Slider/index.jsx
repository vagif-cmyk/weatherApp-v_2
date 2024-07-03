import { useEffect, useState } from "react";
import clsx from "../../utils/clsx";
import Icon from "../Icon";
import styles from "./Slider.module.css";

const Slider = ({ items = [] }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => setIsVisible(false);
  }, []);

  return (
    <div className={styles.slider}>
      <button className={clsx("btn card", styles.navigationBtn)} disabled>
        <Icon type="chevron-left" width="24" height="24" />
      </button>
      <div className={styles.content}>
        <ul className={clsx("list", styles.wrapper, isVisible && styles.active)}>
          {items.map((item) => (
            <li key={item.date || item.time} className={styles.item}>
              <article className={clsx("card", styles.card)}>
                <h3 className={clsx("title", styles.cardTitle)}>{item.date || item.time}</h3>
                <img className={styles.cardImg} src={item.imgSrc} alt={item.description} />
                <p className={clsx("descr", styles.cardTemp)}>{item.temp}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <button className={clsx("btn card", styles.navigationBtn)}>
        <Icon type="chevron-right" width="24" height="24" />
      </button>
    </div>
  );
}

export default Slider;