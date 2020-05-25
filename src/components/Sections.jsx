import React, { Component } from "react";
import Card from "./dumps/Card";
import Modal from "./dumps/Modal";
import Subscribe from "./dumps/Subscribe";
import { useStaticQuery, graphql, Link } from "gatsby";
// Sections son los sectores principales en las que trabaja galatea.
// Además incluye un botón de Call To Action

// props:
// "data" es donde se encuenntran todos los  sectores principales

const ButtonSearch = ({ search }) => (
  <Link
    className="btn btn-secondary"
    to="/products"
    state={{
      search: search,
    }}
  >
    Ver productos
  </Link>
);

const Sections = () => {
  const data = useStaticQuery(graphql`
    query targetInfo {
      sanitySetting {
        targetInfo {
          title
          description
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `);
  const targetInfo = data.sanitySetting.targetInfo;
  return (
    <div className="Sections container align-items-center justify-content-center">
      <div className="row d-flex justify-content-center justify-content-md-between flex-wrap mt-4 mb-4">
        {targetInfo.map((target, i) => {
          return (
            <Card
              key={i}
              data={{
                title: target.title,
                description: target.description,
                imgUrl: target.image.asset.url,
              }}
              button={<ButtonSearch search={target.title} />}
            ></Card>
          );
        })}
      </div>
      <div className="row justify-content-center">
        <Link to="/cotizacion" className="btn btn-primary">
          Pedir Cotización
        </Link>
      </div>
    </div>
  );
};
export default Sections;
