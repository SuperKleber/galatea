import React, { Component } from 'react'
import Card from './dumps/Card';

// Este Componente estaba pensado como una sección de ofertas de productos, al final no se aplicó pero puede
// seguir contruyéndolo

export default class Offers extends Component {
  render() {
    const {data} = this.props 
    return (
      <div className="Offers container justify-content-center d-flex flex-wrap " id="offers">
        <h2 className="row">Ofertas </h2>
        <div className="row justify-content-center d-flex flex-wrap">
            {
                data.map((element)=>{
                    return(
                        <a className="offer m-2 ">
                            <Card horizontal={true} data={element}></Card>
                        </a>
                    ) 
                })
            }
        </div>
        <style jsx>{`
            .offer{
                cursor: pointer;
            }
        
        `}
        </style>
      </div>
    )
  }
}
