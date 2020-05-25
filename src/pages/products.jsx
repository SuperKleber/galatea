import React, { Component } from "react";
import Layout from "../components/Layout";
import HandleProducts from "../components/HandleProducts";
import data from "../../data/data.json";
import Sections from "../components/Sections";

// products.js es la página principal de todo el sitio web,
// recomiendo siempre mantener limpio este código agregando
// sólo las partes importantes del proyecto,.

// Notará que se importó "data", lo cual hace de Api estática
// del proyecto, en vez de eso agregue un "getInitialProps",
// consultar documentación de next.js para más info

// Cualquier funcionalidad extra que se le quiera agregar
// a toda la página, recomiendo o crear un nuevo componente
// o hacerlo en el "Layout", a excepción de los manejadores de errores

// Nota: Escribir todos los archivos de la carpeta "pages" en
// minúscula ya que será el nombre de la URL de dicha página
export default class products extends Component {
  render() {
    return (
      <Layout
        active="products"
        title="Galatea productos"
        dataComponents={data.components}
        generalInformation={data.generalInformation}
      >
        <HandleProducts
          data={data.components.sectors}
          email={data.generalInformation.email}
          search={this.props.location.state && this.props.location.state.search}
        ></HandleProducts>
      </Layout>
    );
  }
}
