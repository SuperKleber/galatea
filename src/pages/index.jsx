import React, { Component } from "react";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import data from "../../data/data.json";
import Lamp from "../components/dumps/Lamp";
import Carousel from "../components/Carousel";

// index.js es la página principal de todo el sitio web,
// recomiendo siempre mantener limpio este código agregando
// sólo las partes importantes del proyecto.

// Notará que se importó el componente "Lamp" al componente
// este puede reemplazar al Componente de
// "Carousel" si se lo desea.

// Notará que se importó "data", lo cual hace de Api estática
// del proyecto, en vez de eso agregue un "getInitialProps",
// consultar documentación de next.js para más info

// Cualquier funcionalidad extra que se le quiera agregar
// a toda la página, recomiendo o crear un nuevo componente
// o hacerlo en el "Layout", a excepción de los manejadores de errores

// Nota: Tomar en cuenta el nombre de los archivos en pages,
// porque serán los path (/example) del sitio

export class index extends Component {
  render() {
    return (
      <Layout
        active="inicio"
        title="Galatea"
        dataComponents={data.components}
        generalInformation={data.generalInformation}
      >
        <Carousel></Carousel>
        <Sections data={data.components.sections}></Sections>
      </Layout>
    );
  }
}

export default index;
