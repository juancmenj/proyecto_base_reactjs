import React, { Component } from "react";
import "./Pricing.scss";
import Menu from "../../components/Menu/Menu";
import PropTypes from "prop-types";

//init props
Pricing.propTypes = {};

export default function Pricing(props = {}) {
  function render() {
    return (
      <div className="mainWrapper">
        <Menu />
        <div>Hola Pricing</div>
      </div>
    );
  }

  return render();
}
