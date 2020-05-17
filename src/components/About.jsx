import React, { Component } from 'react'
// Este componente es simplemente una descripción sencilla de la empresa galatea
export default class About extends Component {
  render() {
    return (
      <div>
          <span>
                <h5>¿Quiénes somos?</h5>
                <h6>Somos un equipo de profesionales tecnólogos de diversas áreas que proveemos soluciones tecnológicas integrando productos y servicios con eficiencia energética sustentable comprometidos con el medio ambiente. cubriendo las necesidades de las personas pequeñas, medianas y grandes empresas</h6>
          </span>
          <span className="mt-2">
                <h5>Servicios e ingeniería</h5>
                <ul className="list-group">
                    <li className="list-group-item">Diseño e instalación de iluminación</li>
                    <li className="list-group-item">Automatización de edificios
                        <h6 className="text-muted"> instalación y diseño del sistema de control e iluminación</h6>
                    </li>
                    <li className="list-group-item">Sistemas de comunicación / teléfonos industriales</li>
                </ul>
          </span>
      </div>
    )
  }
}
