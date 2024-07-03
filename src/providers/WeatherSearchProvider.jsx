import React, { useEffect, useState } from "react";
import { WeatherSearchContext } from "../context/weatherSearchContext";
import { LS_KEY } from "../constants/LS_KEY";
import { Api } from "../api";

// только кириллица и символы не относящеюся к алфавиту
const reg = /^[?!,.а-яА-ЯёЁ0-9\s-]+$/;

export function WeatherSearchProvider({ children, ...props }) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [history, setHistory] = useState(
    localStorage.getItem(LS_KEY) ? JSON.parse(localStorage.getItem(LS_KEY)) : []
  );

  const onChange = (e) => {
    if (e.target.value.match(reg) || e.target.value === "") {
      setValue(e.target.value.trim());
      setIsOpen(true);
      setError(null);
      setSearchResult(null);
    } else {
      setValue(e.target.value.trim());
      setIsOpen(true);
      setError("Для ввода нужно использовать кириллицу");
    }
  };

  const handlerHistory = (city) => {
    setHistory((prev) => Array.from(new Set([city, ...prev])).slice(0, 5));
  };

  const handlerClearHistory = () => {
    setHistory([]);
    localStorage.removeItem(LS_KEY);
  };

  const onFocus = () => {
    setSearchResult(null);
    setIsOpen(true);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const res = await Api.getCity(value);
      if (res.length === 0) {
      }
      const { name } = res[0];
      if (name) {
        setSearchResult(name);
        handlerHistory(name);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlerClose = () => {
    setSearchResult(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector(".app");
    body?.setAttribute("style", `overflow: ${isOpen ? "hidden" : "auto"}`);
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (value.length === 0) {
      setSearchResult(null);
    }
  }, [value]);

  return (
    <WeatherSearchContext.Provider
      value={{
        value,
        onChange,
        handlerSubmit,
        onFocus,
        setIsLoading,
        isLoading,
        list: history,
        isOpen,
        handlerClose,
        cb: setValue,
        error,
        setError,
        searchResult,
        setSearchResult,
        handlerHistory,
        handlerClearHistory,
        ...props,
      }}
    >
      {children}
    </WeatherSearchContext.Provider>
  );
}
