import React from "react";
import Card from "./Card";

// Este componente muestra el producto en una carta.
// Quizá esté un poco confundido por la función "Resize", simplemente
// es una forma de hacer responsive este componente en especial,
// la razón de hacerlo de esta manera y no directamente en los estilos,
// es porque card recibe el ancho y el alto como props, y al no recibirlos pone unos por defecto,
// debido a que queremos unas dimensiones específicas para este componente (Products) y no queremos
// alterar el componente "Card" (para que siga siendo reutilizable), hacemos el responsive directamente con
// JavaScript.

// PROPS:
// "data": es toda la información del producto que se le pasará a "Card"
// "email": el email para pedir info de un producto

export default class Product extends React.Component {
  state = {
    mobile: false,
  };
  componentDidMount() {
    this.Resize();
    window.addEventListener("resize", this.Resize);
  }
  Resize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      this.setState({
        mobile: true,
      });
    } else {
      this.setState({
        mobile: false,
      });
    }
  };
  render() {
    const { data, email } = this.props;

    return (
      <div>
        <div
          className={`product m-2 ${this.state.clickProduct && "fullScreen"}`}
        >
          <Card
            data={data}
            height={!this.state.mobile ? "240px" : "200px"}
            width={this.state.mobile && "100%"}
          >
            {data.doc ? (
              <a
                href={data.doc.docUrl}
                download={`${data.doc.docName}`}
                className="info btn btn-primary mt-2"
              >
                Descargar info
              </a>
            ) : (
              <a href={`mailto:${email}`} className="info text-info mt-2">
                Pedir info {email}
              </a>
            )}
          </Card>
        </div>
        <style jsx="true">{`
          @media screen and (max-width: 767px) {
            .info {
              font-size: 0.8rem;
            }
          }
          .fullScreen {
            position: fixed;
            top: 25svh;
            left: 50vw;
            z-index: 3;
            transform: scale(2) !important;
          }
          .product {
            cursor: pointer !important;
            transition: 0.2s !important;
          }
          .product:hover {
            transform: scale(1.05) !important;
          }
        `}</style>
      </div>
    );
  }
}
