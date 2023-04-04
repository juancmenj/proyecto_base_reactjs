import React, { Component } from "react";
import "./Catalog.scss";
import Menu from "../../components/Menu/Menu";
import PropTypes from "prop-types";

//init props
Catalog.propTypes = {};

export default function Catalog(props = {}) {
  function render() {
    return (
      <div className="mainWrapper">
        <Menu />
        <div>Hola Catalog</div>
      </div>
    );
  }

  return render();
}
