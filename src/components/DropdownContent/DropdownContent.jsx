import Loader from "../UI/Loader/Loader";
import styles from "./dropdownContent.module.css";
import React from "react";

const DropdownContent = ({ title, icon, items, onChoose, className }) => {
  return (
    <>
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        {icon}
      </div>
      <ul className={styles.list}>
        {items ? (
          items.map((item, i) => (
            <li
              className={styles[className]}
              key={i}
              onClick={(e) => onChoose?.(e, item.lat, item.lon)}
            >
              {item.name}
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </>
  );
};

export default DropdownContent;
