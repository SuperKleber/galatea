import React from "react";
import Card from "./Card";
import ButtonWhatsapp from "./ButtonWhatsapp";
const CardProduct = (props) => {
  const data = props.data;
  return (
    <Card
      {...props}
      button={
        <ButtonWhatsapp
          message={`👋Hola Galatea, quiero info de ${data.title}`}
          text="Información"
        />
      }
      data={{
        ...data,
        description: (
          <div>
            <p>{data.description}</p>
            {data.brand && (
              <span className="badge badge-warning">
                {data.brand && data.brand.title}
              </span>
            )}
            {data.category.map(({ title }, i) => {
              return (
                <span key={i} className="badge badge-light ">
                  {title}
                </span>
              );
            })}
            {data.services.length !== 0 && (
              <>
                <hr />
                <h6>Servicios:</h6>
                {data.services.map((title, i) => {
                  return (
                    <span key={i} className="badge badge-info m-1">
                      {title}
                    </span>
                  );
                })}
              </>
            )}

            <br />
            <br />
          </div>
        ),
        imgUrl: data.image,
        docUrl: data.doc,
        email: data.email,
      }}
    ></Card>
  );
};

export default CardProduct;
