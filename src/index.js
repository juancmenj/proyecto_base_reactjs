import React, { Component } from "react";
import ReactDOM from "react-dom";
import AllRoutes from "./js/Routes/Routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './js/Redux/store';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  function render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    );
  }

  return render();
}

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);