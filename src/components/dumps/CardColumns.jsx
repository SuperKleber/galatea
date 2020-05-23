import React from "react";
import Card from "./Card";
import ButtonWhatsapp from "./ButtonWhatsapp";
import CardProduct from "./CardProduct";

const CardColumns = ({ data, novedad }) => {
  return (
    <div className="card-columns">
      {data.allSanityProduct.edges.map(({ node }, i) => {
        if (!novedad) {
          return (
            <CardProduct
              key={i}
              data={{
                ...node,
                description: node.description,
                category: node.category,
                brand: node.brand,
                services: node.services,
                image: node.image && node.image.asset && node.image.asset.url,
                docUrl: node.doc && node.doc.asset && node.doc.asset.url,
                tag: node.promo,
              }}
            />
          );
        } else {
          if (node.promo) {
            return (
              <CardProduct
                key={i}
                data={{
                  ...node,
                  description: node.description,
                  category: node.category,
                  brand: node.brand,
                  services: node.services,
                  image: node.image && node.image.asset && node.image.asset.url,
                  docUrl: node.doc && node.doc.asset && node.doc.asset.url,
                  tag: node.promo,
                }}
              />
            );
          }
        }
      })}
      <style jsx="true">{`
        .card-columns {
          column-count: 4;
        }
        @media screen and (max-width: 1220px) {
          .card-columns {
            column-count: 3;
          }
        }
        @media screen and (max-width: 900px) {
          .card-columns {
            column-count: 2;
          }
        }
        @media screen and (max-width: 600px) {
          .card-columns {
            column-count: 1;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CardColumns;
