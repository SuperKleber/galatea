import React, { Component } from 'react'

// Este Modal funciona un poco diferente a lo que quizá estás acostumbrado,
// debido a que es un modal de Bootstrap tuve problemas para hacerlo de una forma más sencilla
// y limpia, así que lo solucioné de la siguiente manera: 
// debemos pasarle el botón de abrir este modal en la prop "buttonOpenModal",
// este componente toma esa process, la clona y le agrega una funcionalidad de "OnClick" para abrir este modal.
// Hay dos problemas con esta solución:
// -Sólo puedes abrir el modal haciendo click en algo
// -Todo lo que contenga el modal se cargará en la página pero no se verá hasta que den click al botón
// de abrir modal, es decir que si tienes 3 botones para abrir tres modales cada uno con contenido distintos,
// la informaión de estos 3 modales se cargará pero no se verá, esto afecta ligeramente al rendimiento de la página web.

// Mi recomendación es olvidarse del modal del Bootstrap y crear uno tu mismo con sus respectivos estilos.

// PROPS:
// "buttonOpenModal": Componente de Botón para abrir el Modal
// "title": título del modal
// "modalFooter": componente footer del modal

export default class Modal extends Component {
  constructor(){
      super()
      this.modal= React.createRef()
  }
  render() {
    const {buttonOpenModal, title, modalFooter} = this.props
    // const {title,modalFooter}=this.props.data
    const modal = this.modal
    // buttonOpenModal.setAttribute("style", "cursor: pointer")
    return (
      <div>
        {
                buttonOpenModal &&
                React.cloneElement(buttonOpenModal,
                    {onClick:function(){
                        $(modal.current).modal("show")
                    }})
        }
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
            Launch demo modal
        </button> */}
        <div className="modal fade" ref={this.modal}  data-backdrop="true"  role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    {title && <h5 className="modal-title" id="exampleModalScrollableTitle">{title}</h5>}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
                {modalFooter &&
                    <div className="modal-footer container-fluid justify-content-center">
                        {modalFooter}
                    </div>
                }
                </div>
            </div>
        </div>
      </div>
    )
  }
}
