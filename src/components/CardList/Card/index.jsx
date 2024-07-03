import ProgressBar from "../../ProgressBar";
import Icon from "../../Icon";
import clsx from "../../../utils/clsx";
import styles from "./Card.module.css";

const Card = ({
  title,
  iconType,
  value,
  hasProgressBar,
  pbValue,
  units,
  min,
  max,
  gradientPb,
  description,
  imgRotationDeg,
}) => {
  return (
    <li className={styles.item}>
      <article className={clsx("card", styles.card)}>
        <h2 className={clsx("title", styles.title)}>{title}</h2>
        <div className={styles.iconWrapper}>
          <Icon
            type={iconType}
            style={{
              transform: imgRotationDeg && `rotate(${imgRotationDeg}deg`,
            }}
          />
        </div>
        <span className={styles.value}>
          {value}
          {units ? " " + units : ""}
        </span>
        <div className={styles.bottom}>
          {hasProgressBar && (
            <ProgressBar
              current={pbValue}
              type={gradientPb ? "gradient" : "normal"}
            />
          )}
          <div
            className={clsx(
              styles.info,
              typeof min === "number" &&
                typeof max === "number" &&
                styles.interval
            )}
          >
            {typeof min === "number" && typeof max === "number" ? (
              <>
                <span>0%</span>
                <span>100%</span>
              </>
            ) : (
              description
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default Card;
