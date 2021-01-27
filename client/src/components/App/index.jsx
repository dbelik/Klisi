import React, { Fragment, useEffect } from 'react';

import Routes from "../Router/Routes"

import "normalize.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./global.css";

export default function App() {
  useEffect(() => {
    const loadingScreen = document.getElementById("klisi-loading");
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = "none", 400);
  });

  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}