import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "./dumps/Card";
import ButtonWhatsapp from "./dumps/ButtonWhatsapp";
const HandleServices = () => {
  let data = useStaticQuery(graphql`
    query services {
      allSanityServices {
        edges {
          node {
            title
            image {
              asset {
                url
              }
            }
            description
          }
        }
      }
    }
  `);
  const services = data.allSanityServices.edges;
  return (
    <div className="container">
      <div className="row">
        {services.map(({ node }, i) => {
          return (
            <div className="col" key={i}>
              <Card
                data={{
                  title: node.title,
                  imgUrl: node.image.asset.url,
                  description: node.description,
                }}
                button={
                  <ButtonWhatsapp
                    text="Consultar servicio"
                    message={`Hola galatea, me interesa este servicio "${node.title}"`}
                  ></ButtonWhatsapp>
                }
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HandleServices;
