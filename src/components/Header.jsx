import React, { Component } from "react";
import Modal from "./dumps/Modal";
import About from "./About";
import { Link } from "gatsby";
// Este componente cumple la función principal de ser un Menú
// el props "active" es una forma rudimentaria de pintar un poco más negro
// la parte del menú en el que te encuentras, ahora mismo sólo funciona con la pagína "products"

export default class Header extends Component {
  render() {
    const { active, title } = this.props;
    return (
      <header className="Header Menu">
        <Link to="/" className="logo d-flex align-items-center mb-2 m-3">
          <img
            className="rounded-circle mt-auto mr-2"
            src="/images/isotipoGalatea.png"
            alt="logo"
          />
          <h1 className="m-0 titleWeb">{title ? title : "galatea"}</h1>
        </Link>

        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className={`nav-link`}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className={`nav-link ${active == "products" && "active"}`}
                >
                  productos y servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="cotizacion"
                  className={`nav-link  ${active == "cotización" && "active"}`}
                >
                  Cotización
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contacto
                </a>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="buscar en galatea" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form> */}
          </div>
        </nav>

        <style jsx="true">{`
            .titleWeb{color: #59bb45}
            .nav-link{cursor:pointer, width:100%}
            .Layout{
              background: #fff;
            }
            .logo img{
              width: 60px;
            }
          `}</style>
      </header>
    );
  }
}
