import React, { Component } from "react";
import Card from "./dumps/Card";
import Modal from "./dumps/Modal";
import Subscribe from "./dumps/Subscribe";
import { Link } from "gatsby";

// Sections son los sectores principales en las que trabaja galatea.
// Además incluye un botón de Call To Action

// props:
// "data" es donde se encuenntran todos los  sectores principales

export default class Sections extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="Sections container align-items-center justify-content-center">
        <div className="row d-flex justify-content-center justify-content-md-between flex-wrap mt-4 mb-4">
          {data.rubros.map((element, i) => {
            return <Card key={i} data={element}></Card>;
          })}
        </div>
        <div className="row justify-content-center">
          <Link to="/cotizacion" className="btn btn-primary">
            Pedir Cotización
          </Link>
        </div>
      </div>
    );
  }
}
