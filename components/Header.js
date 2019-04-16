import React, { Component } from 'react'
import Modal from "./dumps/Modal"
import About from './About';
import Mercados from './Mercados';

// Este componente cumple la función principal de ser un Menú
// el props "active" es una forma rudimentaria de pintar un poco más negro
// la parte del menú en el que te encuentras, ahora mismo sólo funciona con la pagína "products"

export default class Header extends Component {
  render() {
    const {active, title, dataMercados}=this.props
    return (
    <header className="Header Menu">
        <a href="./index" className="logo d-flex align-items-center mb-2 m-3">
          <img className="rounded-circle mt-auto mr-2" src="../static/images/isotipoGalatea.png" alt="logo"/>
          <h1 className="m-0 titleWeb">{title ? title : "galatea"}</h1 >
        </a>
          
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <Modal 
                  buttonOpenModal={
                      <a className="nav-link" style={{cursor:"pointer"}}>Acerca de nosotros</a>
                  }
                  modalFooter={
                    <div className="d-flex align-items-center  row">
                      <h6 className="text-center m-0 mr-3">Solicita tu cotización</h6>
                      <a href="mailto:info@galatea.ws">info@galatea.ws</a>
                    </div>
                  }
                  title="Acerca de Nosotros">
                  <About></About>
                </Modal> 
              </li>
              <li className="nav-item">
                <a className={`nav-link ${active=="products" && "active"}`} href="./products">productos y servicios</a>
              </li>
              <li className="nav-item">
                <Modal 
                  buttonOpenModal={
                      <a className="nav-link" style={{cursor:"pointer"}} >Nuestros clientes<span className="sr-only">(current)</span></a>
                  }
                  modalFooter={
                    <div className="d-flex align-items-center justify-content-center row">
                      <h6 className="text-center m-0 mr-3">Solicita tu cotización</h6>
                      <a href="mailto:info@galatea.ws mr-3">info@galatea.ws</a>
                    </div>
                  }
                  title="Industria y Clientes">
                  <Mercados data={dataMercados}></Mercados>
                </Modal> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contacto</a>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="buscar en galatea" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form> */}
          </div>
        </nav>

        <style jsx>{`
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
    )
  }
}
