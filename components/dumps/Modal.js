import React, { Component } from 'react'

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
                React.cloneElement(buttonOpenModal,
                    {onClick:function(){
                        $(modal.current).modal("show")
                    }})
        }
        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
            Launch demo modal
        </button> */}
        <div class="modal fade" ref={this.modal} tabindex="-1" data-backdrop="true"  role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    {title && <h5 class="modal-title" id="exampleModalScrollableTitle">{title}</h5>}
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {this.props.children}
                </div>
                {modalFooter &&
                    <div class="modal-footer container-fluid justify-content-center">
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
