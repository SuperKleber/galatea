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
  const { imgUrl, title, description, docUrl, email } = props.data;
  const { horizontal, width, height } = props;
  return (
    <div className="card mt-4 " style={props.style}>
      {imgUrl && (
        <img src={imgUrl} className="card-img-top" alt={`foto de ${title}`} />
      )}

      <div className="card-body d-flex flex-column justify-content-between">
        {title && <h6 className={`card-title`}>{title}</h6>}
        {description && <div className="card-text">{description}</div>}
        {docUrl ? (
          <a target="_blank" href={docUrl} className={`btn btn-primary`}>
            Descargar Info
          </a>
        ) : (
          <a target="_blank" href={`mailto:${email}`} className={`link`}>
            Pedir info {email}
          </a>
        )}
        {props.children}
      </div>
      <style jsx="true">{`
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
  );
}
