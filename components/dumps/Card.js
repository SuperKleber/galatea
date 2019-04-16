import React from 'react'
import List from "./List"

// Este es un componente reutilizable para hacer cards de Bootstrap,

// PROPS:
// width: define el ancho de la carta, si no se pasa esta prop tiene un ancho por defecto
// heiht: define el alto de la imagen, también tiene un alto por defecto,
// horizontal: define si la carta es horizontal o no
// data: toda la información de la carta

//Explicación de la existencia de data.sublist, ¿por qué consumir una lista directamente desde la data de la API
// y no simplemente añadirla como un children? simplemente porque esta es una funcionalidad específica del SECTOR 
// "iluminación" (para saber más de sectores visite "handleProducts"), para no crear un nuevo componente 
// sólo por este sector, entonces decidí que lo consuma directamente con el data, siendo ahora una opción de las Card,
// decidí dejarlo así de momento


export default function Card(props) {
  const {imgUrl,title,description,subList,button}=props.data
  const {horizontal, width, height}=props
  return (
    !horizontal ?
    <div className="card mt-4 ">
        { imgUrl && <img src={imgUrl} className="card-img-top" alt={`foto de ${imgUrl.split("/")[imgUrl.split("/").length-1]}`}/>}
        {
          (title || description || button || subList || props.children) &&
            <div className="card-body d-flex flex-column justify-content-between">
                { title && <h6 className={`card-title ${!(description || button || props.children) && "m-0" }`}>{title}</h6>}
                { description && <p className="card-text">{description}</p>}
                { subList && <List data={subList}></List>}
                { button && <a href="#" className={`btn btn-${button.typeButton.toLowerCase()}`}>{button.textButton}</a> }
                {props.children}
            </div>
        }
        <style jsx>{`
        .card{
          width: ${width || "18rem"};
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .card img{
          height: ${height || "163px"};
          Object-fit: cover;
        }
        @media screen and (max-width:767px){
          .card-text{font-size:.8em}
        `}</style>
    </div>
    :
    <div className="card mb-3">
      <div className="row ">
        <div className="col-4">
          { imgUrl && <img src={imgUrl} className="card-img-top" alt={`foto de ${title}`}/>}
        </div>
        <div className="col-8">
          <div className="card-body">
            { title && <h5 className="card-title">{title} </h5>}
            { description && <p className="card-text mt-2">{description}</p>}
            { button && <a href="#" className={`btn btn-${button.typeButton.toLowerCase()}`}>{button.textButton}</a> }
            {props.children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card{
            max-width:600px;
        }
        .card img{
          width:  ${width || "180px"};
          height: ${height || "180px"};
          Object-fit: cover;
        }
        @media screen and (max-width:767px){
          .card-text{font-size:.87em}
        }
      `}</style>
    </div>

      
  )
}
