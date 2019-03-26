import React from 'react'
import Card from "./dumps/Card"
export default function Mercados(props) {
    const {industries, clientes}=props.data
    return (
        <div>
            <p>
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
            </p>
            <p>
                <h5>¿Qué tipo de empresas necesitan nuestro productos y servicios?</h5>
                <ul className="list-group">
                {
                    industries.map((element)=>{
                        return <li className="list-group-item">{element}</li>
                    })
                }
                </ul>
            </p>
            <style jsx>{`
                .client{

                }
            `}</style>
        </div>
    )
}
