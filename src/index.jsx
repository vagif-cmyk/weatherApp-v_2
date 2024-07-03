import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css"; // не передвигать ниже импорта App.jsx, иначе глобальные стили будут приоритетнее модульных
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
