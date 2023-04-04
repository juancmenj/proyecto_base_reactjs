import React, { useEffect } from "react";
import "./Menu.scss";
import classnames from "classnames";
import { menuLiterals } from "../../Literals/menu";
import PropTypes from "prop-types";
import { routeCodes } from "../../Routes/routesConfig";
import { NavLink } from "react-router-dom";
//import urlImgLogo from "../../../assets/logotipo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image'
//@fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

import { useLocation } from "react-router-dom";

//init props
Menu.propTypes = {};

export default function Menu(props = {}) {
  let location = useLocation();

  useEffect(() => {
    clickHandlerActive(routeCodes.HOMEPAGE); //active option default
  }, []);

  function clickHandlerActive(route) {
    const activeDiv = document.querySelector('.noActive');
    if (activeDiv) {
      if (location.pathname === route) {
        activeDiv.classList.add('active');
      } else {
        activeDiv.classList.remove('active');
      }
    }
  }

  function redirectBlanck(url) {
    window.open(url, '_blank');
  }

  function render() {
    const name = menuLiterals && menuLiterals.name;
    const routes = menuLiterals && menuLiterals.routes;
    const redes = menuLiterals && menuLiterals.redes;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={"yellow_bg"}>
        <Container>
          <Navbar.Brand as={NavLink} to={routeCodes.HOMEPAGE} className={"branding"}>
            <Image
              src={""/*urlImgLogo*/}
              width="140"
              fluid
              className="d-inline-block align-top"
              alt={name}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto routes">
              {
                routes && routes.map((el, index) => {
                  return (
                    <Nav.Link
                      id={"routes" + index}
                      key={index}
                      className={"noActive"}
                      as={NavLink}
                      to={el.url}
                    >{el.label}
                    </Nav.Link>
                  )
                }
                )
              }
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <div className={"menu-redes"}>
              {
                redes && redes.map((el, index) => {

                  const redesClass = classnames(
                    "menu-redes-icon",
                    el.class
                  );

                  return (
                    <div
                      id={"redes" + index}
                      key={index}
                      className={"menu-redes-link"}
                      onClick={() => redirectBlanck(el.url)}
                    >
                      <div className={redesClass}>
                        <FontAwesomeIcon icon={el.icon} />
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    );
  }

  return render();
}