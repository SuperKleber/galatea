import React from 'react'
import Card from "./dumps/Card"

// Este Componente muestra todos los clientes que obtuvo la empresa, además 
// la parte del código que está comentado son los tipo de Mercados
// con los que Galatea suele trabajar

// props:
// "clientes": son todos los clientes con los que galatea trabajar y que galatea desea mostrar al público
// "industries":son los tipo de Mercados
// con los que Galatea suele trabajar
export default function Mercados(props) {
    const {industries, clientes}=props.data
    return (
        <div>
            <span>
                <h5>Estas empresas confiaron en nuestros productos y servicios</h5>
                <div className="d-flex flex-wrap justify-content-around">
                {
                    clientes.map((element)=>{
                        return(
                            <Card data={{imgUrl:element.logoImgUrl}} height="auto" width="150px"></Card>
                        )
                    })
                }
                </div>
            </span>
            {/* <span>
                <h5>¿Qué tipo de empresas necesitan nuestro productos y servicios?</h5>
                <ul className="list-group">
                {
                    industries.map((element)=>{
                        return <li className="list-group-item">{element}</li>
                    })
                }
                </ul>
            </span> */}
        </div>
    )
}
