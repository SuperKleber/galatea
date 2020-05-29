import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import FormNetlify from "./dumps/FormNetlify";
// Layout es el componente que hace de contenedor de todas las páginas, contiene el "head", el "header" y el "footer"

// props:
// "title": es el título de la página que se verá en la pestaña de la web
// "active": es donde se encuentra actualmente la web, y se la pasa al componente "header"
// "dataComponets": es la información de todos los componentes de la web, que en este caso
// solo se usa la info de la lista de clientes (Mercados) y la del footer
// "generalInformation": es la información general de la empresa galatea

export default class Layout extends Component {
  render() {
    const { title, active, dataComponents, generalInformation } = this.props;
    console.log(
      "%cSitio web hecho por kleber.digital " +
        "%cWhatsapp: +591 70657034 " +
        "%cWeb: www.kleber.digital",
      "font-family: Arial; background:#2a2f36; color: #00ffec; font-size: 30px; border:2px solid #00ffec; padding: 8px; border-radius: 5px; margin: 10px 0",
      "font-family: Arial; background:#075e54; color: #ece5dd; font-size: 15px; padding: 8px; border-radius: 5px; margin: 10px 10px 10px 0;",
      "font-family: Arial; font-weight: bold; background: #00ffec; color: #2a2f36; font-size: 15px; padding: 8px; border-radius: 5px;"
    );
    return (
      <div className="Layout">
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <title>{title}</title>

          {/* Estos Scripts no deberían venir acá, intenta buscar la manera de ponerlas al final del body del html */}
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"
          ></script>
        </Helmet>

        <Header active={active}></Header>

        {this.props.children}

        <Footer></Footer>
        <style global="true" jsx="true">{`
          html {
            scroll-behavior: smooth;
          }
          body {
            width: 100vw;
            overflow-x: hidden;
          }
          .formNetlify {
            display: none;
          }
        `}</style>

        <div className="formNetlify">
          <FormNetlify></FormNetlify>
        </div>
      </div>
    );
  }
}
