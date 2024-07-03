import { useEffect, useState } from "react";
import clsx from "../../utils/clsx";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ current, type = "normal" }) => {
  const [value, setValue] = useState(50);

  useEffect(() => {
    if (current) {
      setTimeout(() => {
        setValue(current > 97 ? 97 : current < 3 ? 3 : current);
      }, 100);
    }
  }, [current]);

  return (
    <div
      className={clsx(styles.progress, type === "gradient" && styles.gradient)}
      style={{ "--progress-value": value + "%" }}
    >
      <div></div>
    </div>
  );
};

export default ProgressBar;
