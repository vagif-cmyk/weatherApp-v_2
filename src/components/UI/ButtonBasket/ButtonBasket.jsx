import { Icon } from "../../Icon/Icon";
import styles from "./buttonBasket.module.css";
import React from "react";

const ButtonBasket = ({ handleClick, disabled, type }) => {
  return (
    <button
      className={styles.icon}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon icon="basket" />
    </button>
  );
};

export default ButtonBasket;
