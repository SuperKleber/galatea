import React from "react";

// Este componente es una lista pero tiene dos funcionalidades,
// si a esta lista se le pasa una funcion en el prop "handelActionList" entonces al hacer click en un elemento de la lista,
// este se pintará de azul, y ejecutará dicha función pasándo de parametro a el mismo elemento de la lista,
// de esta manera el componente padre podrá recibir información de cuál elemento de la lista
// fue seleccionado por el usuario.
// Si no se le pasa esta función será una lista común y corriente, pero que si un elemento de dicha lista, contiene
// un "href" en el json, entones direccionará a ese href

// PROPS:
// data: es un array todos los elementos de la lista
// handleActionList: la acción que se quiere realizar al hacer click en un elemento de la lista

export default function List(props) {
  const { data, handleActionList } = props;
  return (
    <div>
      <div className="List row">
        <div className="col">
          <div className="list-group" id="list-tab" role="tablist">
            {data.map((element, i) => {
              return handleActionList ? (
                <a
                  onClick={
                    function () {
                      handleActionList(element, i);
                    } || null
                  }
                  className={`list-group-item list-group-item-action `}
                  id={`list-${element.category.split(" ").join("")}-list`}
                  data-toggle="list"
                  href={`#list-${element.category.split(" ").join("")}`}
                  role="tab"
                  aria-controls={element.category}
                >
                  {element.category.toUpperCase()}
                </a>
              ) : (
                <a
                  href={element.href || null}
                  style={{ width: "100%" }}
                  className="list-group-item disabled text-muted"
                >
                  {element.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx="true">{`
        @media screen and (max-width: 767px) {
          .list-group-item {
            padding: 0.45rem 1.25rem;
            font-size: 0.87em;
          }
          .list-group {
            flex-direction: initial !important;
            flex-wrap: wrap;
          }
          .List {
            flex-direction: column !important;
          }
          .col-4 {
            max-width: none;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
