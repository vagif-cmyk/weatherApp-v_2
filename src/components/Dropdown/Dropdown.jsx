import { useContext, useRef } from "react";
import styles from "./dropdown.module.css";
import { Context } from "../../context/AppContext";
import { HeadContext } from "../../context/HeaderContext";
import useClickOutside from "../../hooks/useClickOutside";

const Dropdown = () => {
  const dropRef = useRef(null);
  const { searchOpen, setSearchOpen } = useContext(Context);
  const { dropDownContent } = useContext(HeadContext);
  useClickOutside(dropRef, () => {
    setSearchOpen(false);
  });

  return (
    <div
      className={`${styles.drop} ${searchOpen ? "dropDownActive" : styles.hidden}`}
      ref={dropRef}
    >
      {dropDownContent}
    </div>
  );
};

export default Dropdown;
