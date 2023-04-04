import React from "react";
import { Routes, Route } from "react-router-dom";
import { routeCodes } from "./routesConfig";
import Home from "../Views/Home";
import Pricing from "../Views/Pricing";
import Catalog from "../Views/Catalog";

function AllRoutes() {
  return (
    <Routes>
      <Route exact path={routeCodes.HOMEPAGE} element={<Home />} />
      <Route exact path={routeCodes.PRICING} element={<Pricing />} />
      <Route exact path={routeCodes.CATALOG} element={<Catalog />} />
    </Routes>
  );
}

export default AllRoutes;
