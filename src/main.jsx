import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <div className="h-screen w-screen flex justify-center items-center"><a id="1" href="#2" className="hover:text-red-500">test</a></div>
    <div className="h-screen w-screen flex justify-center items-center"><a id="2" href="#3">test</a></div>
    <div className="h-screen w-screen flex justify-center items-center"><a id="3" href="#4">test</a></div>
    <div className="h-screen w-screen flex justify-center items-center"><a id="4" href="#1">test</a></div> */}
  </React.StrictMode>,
);
