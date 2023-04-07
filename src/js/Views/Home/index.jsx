import React, { useState, useEffect, useRef } from "react";
//import PropTypes from "prop-types";2
//redux
import { connect } from "react-redux";
//actions
import { getHomeSuccess } from "../../Redux/Actions/home";
import { useDispatch } from "react-redux";
import Menu from "../../components/Menu/Menu";
import { Button } from 'react-bootstrap';

import "./Home.scss";

export default connect(state => {
})(Home);


//init props
Home.propTypes = {};

function Home(props = {}) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    debugger
    dispatch(getHomeSuccess("success"));
  }, [])

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
