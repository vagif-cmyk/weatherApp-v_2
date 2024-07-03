import { useContext, useRef } from "react";
import { useClickOutside } from "../../hooks";
import Dropdown from "../Dropdown";
import Input from "../Input";

import styles from "./WeatherSearch.module.css";
import { WeatherSearchContext } from "../../context/weatherSearchContext";
import Icon from "../Icon";

export default function WeatherSearch() {
  const {
    value,
    onChange,
    handlerSubmit,
    isOpen,
    onFocus,
    handlerClose,
    cb,
    list,
    isLoading,
    setIsLoading,
    error,
    setError,
    searchResult,
    setSearchResult,
    handlerHistory,
    handlerClearHistory,
    setData,
  } = useContext(WeatherSearchContext);

  const ref = useRef(null);
  useClickOutside(ref, handlerClose);

  return (
    <form className={styles.form} onSubmit={handlerSubmit} ref={ref}>
      <Input
        className={styles.search}
        type="search"
        placeholder="Поиск по городу"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {value.length > 0 && (
        <button type="reset" className={styles.btnClear} onClick={() => cb("")}>
          <Icon type="clear" className={styles.icon} />
        </button>
      )}
      {value.length === 0 && (
        <button
          type="submit"
          className={styles.btnClear}
          onClick={handlerSubmit}
        >
          <Icon type="search" className={styles.icon} />
        </button>
      )}
      <Dropdown
        isOpen={isOpen}
        handlerClose={handlerClose}
        cb={cb}
        list={list}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
        searchResult={searchResult}
        handlerHistory={handlerHistory}
        handlerClearHistory={handlerClearHistory}
        setSearchResult={setSearchResult}
        setData={setData}
      />
    </form>
  );
}
