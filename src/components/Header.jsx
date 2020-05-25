import React, { Component } from "react";
import Modal from "./dumps/Modal";
import About from "./About";
import { Link } from "gatsby";
import SearchApp from "./SearchApp";
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
          <h1 className="m-0 titleWeb">{title ? title : "GALATEA"}</h1>
        </Link>

        <nav
          className="navbar navbar-expand-lg    container-fluid navbar-dark "
          style={{ backgroundColor: "#59bb45" }}
        >
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
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className={`nav-link ${active == "products" && "active"}`}
                >
                  PRODUCTOS
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/products"
                  className={`nav-link ${active == "products" && "active"}`}
                >
                  SERVICIOS
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  to="cotizacion"
                  className={`nav-link  ${active == "cotización" && "active"}`}
                >
                  COTIZACIÓN
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${active == "novedad" && "active"}`}
                  to="/novedad"
                >
                  PROMOCIONES Y NOVEDADES
                </Link>
              </li>
            </ul>

            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="buscar en galatea" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form> */}
          </div>
          <div className="searchNav">
            <SearchApp simple limit={5}></SearchApp>
          </div>
        </nav>

        <style jsx="true">{`
          .titleWeb {
            color: #59bb45;
          }
          .nav-link {
            cursor: pointer;
            color: white !important;
          }
          .active {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
          }
          .Layout {
            background: #fff;
          }
          .logo img {
            width: 60px;
          }
          .Header.Menu {
            position: relative;
          }
          .searchNav {
            position: absolute;
            right: 24px;
            top: 9px;
            z-index: 100;
            width: 350px;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 4px;
          }
          @media (max-width: 1000px) {
            .searchNav {
              right: 8px;
              width: 300px;
            }
          }
          @media (max-width: 600px) {
            .searchNav {
              right: 8px;
              width: 250px;
            }
          }
        `}</style>
      </header>
    );
  }
}
