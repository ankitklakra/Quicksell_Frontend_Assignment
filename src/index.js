import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import App from "./App"; // Main app component
import './styles.css'; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 