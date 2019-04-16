import React from 'react'

// Este componente en simplemente un dropdown que cada elemento del mismo ejecuta una función que se le pasa
// por el prop "handleActionDropdown" pasándole de parámetro el elemento que fue seleccionado

export default function Dropdown(props) {
  const {data, inSector, handleActionDropdown}=props
  return (
    <div>
        <div className="btn-group  container p-0 m-0  mb-2">
            <p className="text-white text-center rounded-left bg-primary p-2 p-md-3 m-0 col-3">
                Sector:
            </p>
            <button type="button" className="btn btn-danger dropdown-toggle col-9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {inSector.title}
            </button>
            <div className="dropdown-menu col-9">
                {
                    data.map((element, i)=>{
                       return <a onClick={function(){handleActionDropdown(element)}} className="dropdown-item" href="#">{element.title}</a>
                    })
                }
            </div>
        </div>
        <style jsx>{`
        `}</style>
    </div>
  )
}
