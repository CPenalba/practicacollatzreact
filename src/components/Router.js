import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Collatz from "./Collatz";
import { useParams } from "react-router-dom";

export default class Router extends Component {
  render() {
    function CollatzElement() {
      var { minumero } = useParams();
      //devolvemos el component tabla multiplicar con su props de la variable numero
      return <Collatz numero={minumero} />;
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collatz/:minumero" element={<CollatzElement />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
