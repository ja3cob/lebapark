import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

document.body.addEventListener(
  "touchstart",
  function () {
    var allVideos = document.querySelectorAll("video");
    for (var i = 0; i < allVideos.length; i++) {
      allVideos[i].play();
    }
  },
  { once: true }
);
