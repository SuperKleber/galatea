import React, { Component } from 'react'
import Card from "./dumps/Card"
export default class Sections extends Component {
  render() {
    const {data}=this.props
    return (
        <div className="Sections container align-items-center justify-content-center">
          <div className="row d-flex justify-content-around flex-wrap mt-4 mb-4">
            {
              data.rubros.map((element)=>{
                  return <Card  data={element}></Card>
              })
            }
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-primary">Pedir cotización</button>
          </div>
        </div>
    )
  }
}
 