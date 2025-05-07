import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import FlashCard from "./FlashCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FlashCard />
  </React.StrictMode>
);
