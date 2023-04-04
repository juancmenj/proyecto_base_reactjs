import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "../../components/Menu/Menu";

import { Button } from 'react-bootstrap';

import "./Home.scss";

//init props
Home.propTypes = {};

export default function Home(props = {}) {
  function render() {
    return (
      <div className="mainWrapper">
        <Menu />
        <div>Hola Home</div>
        <Button>Cerrar</Button>
      </div>
    );
  }

  return render();
}
