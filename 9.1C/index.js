// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // make sure App.jsx is in src/

// Render the App component inside the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
