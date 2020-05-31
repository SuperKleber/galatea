import React from "react";
import Card from "./Card";
import ButtonWhatsapp from "./ButtonWhatsapp";
import ButtonEmail from "./ButtonEmail";
import LimitText from "./LimitText";
const CardProduct = (props) => {
  const data = props.data;
  return (
    <Card
      {...props}
      button={
        <div>
          <ButtonWhatsapp
            message={`👋Hola Galatea, quiero info de ${data.title}`}
            text="Info por Whatsapp"
          />
          <div className="mb-3"></div>
          <ButtonEmail
            message={`👋Hola Galatea, quiero info de ${data.title}`}
          />
        </div>
      }
      data={{
        ...data,
        description: <LimitText text={data.description} />,
        imgUrl: data.image,
        docUrl: data.doc,
        email: data.email,
      }}
    >
      <div>
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

        <br />
        <br />
      </div>
    </Card>
  );
};

export default CardProduct;
