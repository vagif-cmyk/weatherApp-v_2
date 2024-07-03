import { Api } from "../../api";
import { Loader } from "../Loader";
import Icon from "../Icon";
import styles from "./Dropdown.module.css";

export default function Dropdown({
  isOpen,
  handlerClose,
  cb,
  list,
  isLoading,
  setIsLoading,
  error,
  setError,
  searchResult,
  setSearchResult,
  handlerClearHistory,
  setData,
}) {
  const handlerBtn = async (value) => {
    setIsLoading(true);
    try {
      const res = await Api.getCityWeatherData(value);
      setData(res, value);
      setSearchResult(null);
      handlerClose();
      cb("");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    isOpen && (
      <div className={styles.dropdown}>
        {isLoading && (
          <div className={styles.loader}>
            <div className={styles.titleAndBtnWrapper}>
              <h3 className={styles.title}>Ищем...</h3>
            </div>
            <div className={styles.loaderWrap}>
              <Loader />
            </div>
          </div>
        )}
        {error && (
          <div className={styles.error}>
            {
              <div>
                <div className={styles.titleAndBtnWrapper}>
                  <h3 className={styles.title}>Упс! Город не найден</h3>
                </div>
                <p className={styles.text}>Попробуйте другое название.</p>
              </div>
            }
          </div>
        )}
        {!isLoading && searchResult && !error && (
          <div className={styles.success}>
            <div className={styles.titleAndBtnWrapper}>
              <h3 className={styles.title}>Результат поиска</h3>
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                handlerBtn(searchResult);
              }}
            >
              {searchResult}
            </button>
          </div>
        )}
        {}
        {!isLoading && !searchResult && !error && (
          <div className={styles.history}>
            <div className={styles.titleAndBtnWrapper}>
              <h3 className={styles.title}>Недавно просмотренные</h3>
              <button
                className={styles.deleteBtn}
                disabled={list.length === 0}
                onClick={handlerClearHistory}
                type="reset"
              >
                <Icon type="delete" className={styles.deleteIcon} />
              </button>
            </div>
            {list.length === 0 && (
              <p className={styles.text}>История поиска пустая.</p>
            )}
            <ul className={""}>
              {list.map((el, i) => {
                return (
                  <li key={i}>
                    <button
                      className={styles.btn}
                      type="button"
                      onClick={() => {
                        handlerBtn(el);
                      }}
                    >
                      {el}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    )
  );
}
