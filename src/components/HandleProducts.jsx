import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "./dumps/Card";
import SearchApp from "./SearchApp";
import CardColumns from "./dumps/CardColumns";
import { useEffect } from "react";

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
            services
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
          <hr />
        </>
      )}
      <h1>{novedad ? "Todas las novedades" : "Todos los productos"}</h1>
      <div className="row">
        <CardColumns data={data} novedad={novedad} />
      </div>
    </div>
  );
};
export default HandleProducts;
