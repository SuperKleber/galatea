import React from "react";
import List from "./List";

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
  const { imgUrl, title, description, tag } = props.data;
  const { horizontal, width, height, button, className } = props;
  return (
    <div className={`card mt-4 ${className}`} style={props.style}>
      {tag && <div className="tag">{tag}</div>}
      <div className="row no-gutters" style={{ height: "100%" }}>
        {imgUrl && (
          <div
            className={`col-${
              horizontal ? 4 : 12
            } d-flex justify-content-center align-items-center rounded`}
          >
            <img
              src={imgUrl}
              style={{ width: "100%" }}
              className="card-img-top"
              alt={`foto de ${title}`}
            />
          </div>
        )}
        <div className={`col-${horizontal ? 8 : 12}`}>
          <div
            style={{ height: "100%" }}
            className="card-body d-flex flex-column justify-content-between"
          >
            {title && <h6 className={`card-title`}>{title}</h6>}
            {description && <div className="card-text">{description}</div>}
            {/* {docUrl ? (
          <a target="_blank" href={docUrl} className={`btn btn-primary`}>
            Descargar Info
          </a>
        ) : (
          <a target="_blank" href={`mailto:${email}`} className={`link`}>
            Pedir info {email}
          </a>
        )} */}
            {button && button}
            {props.children}
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .card{
          width: ${width || "18rem"};
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        .tag{
          position: absolute;
          right: 0;
          top: 0;
          background: #de3e5e;
          color: #ffffff;
          border-radius: 0 0 0 4px;
          padding: 4px;
          z-index: 2;
        }
        .card img{
          Object-fit: cover;
        }
        @media  (max-width:767px){
          .card-text{font-size:.8em}
          .card{margin: auto}
        `}</style>
    </div>
  );
}
