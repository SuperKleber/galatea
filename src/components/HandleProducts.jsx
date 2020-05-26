import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "./dumps/Card";
import SearchApp from "./SearchApp";
import CardColumns from "./dumps/CardColumns";
import { useEffect } from "react";
import Sections from "./Sections";
import dataJson from "../../data/data.json";
const HandleProducts = ({ search, novedad }) => {
  let data = useStaticQuery(graphql`
    query AllProduct {
      allSanityProduct {
        edges {
          node {
            id
            title
            description
            brand {
              title
            }
            category {
              title
            }
            services {
              title
            }
            promo
            doc {
              asset {
                url
              }
            }
            image {
              asset {
                url
              }
            }
          }
        }
      }
      sanityInfo {
        contact {
          email
        }
      }
    }
  `);
  return (
    <div className="container mt-4">
      {!novedad && (
        <>
          <SearchApp defaultSearch={search}></SearchApp>
          <Sections></Sections>
          <hr />
        </>
      )}
      {/* {!novedad && <Sections data={dataJson.components.sections}></Sections>} */}
      <h1>{novedad ? "Todas las novedades" : "Todos los productos"}</h1>
      <div className="row">
        <CardColumns data={data} novedad={novedad} />
      </div>
    </div>
  );
};
export default HandleProducts;
