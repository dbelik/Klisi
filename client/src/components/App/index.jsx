import React, { Fragment, useEffect, useState } from 'react';

import Routes from "../Router/Routes"

import "normalize.css";
import "./global.css";

export default function App() {
  useEffect(() => {
    const loadingScreen = document.getElementById("klisi-loading");
    loadingScreen.style.opacity = 0;
  });

  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}