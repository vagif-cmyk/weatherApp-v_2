import { createContext } from "react";

export const WeatherSearchContext = createContext({
  value: "",
  onChange: () => {},
  handlerSubmit: () => {},
  onFocus: () => {},
  isLoading: false,
  list: [],
  isOpen: false,
  handlerClose: () => {},
  cb: () => {},
  error: null,
  setError: () => {},
  searchResult: null,
  setSearchResult: () => {},
  handlerHistory: () => {},
  handlerClearHistory: () => {},
});
