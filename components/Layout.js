import React, { Component } from 'react'
import Head from "next/head"
export default class Layout extends Component {
  render() {
    const {title} = this.props
    return (
      <div className="Layout">
        <Head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
              
        </Head>
        <header className="container">
          <a className="logo d-flex align-items-center mb-2 mt-4">
            <img className="rounded-circle mt-auto mr-2" src="../static/images/isotipoGalatea.png" alt="logo"/>
            <h3 >{title ? title : "galatea"}</h3 >
          </a>
            
          <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Mercados y sectores<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">productos y servicios</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Empresa
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Acerca de nosotros</a>
                    <a className="dropdown-item" href="#">Nuestros clientes</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Contacto</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="buscar en galatea" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
        </header>
          <style jsx>{`
            .Layout{
              background: #fff;
            }
            .logo img{
              width: 40px;
            }
          `}</style>
          {this.props.children}
      </div>
    )
  }
}
