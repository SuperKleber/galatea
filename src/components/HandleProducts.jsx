import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "./dumps/Card";
import SearchApp from "./SearchApp";

const HandleProducts = ({ email }) => {
  const data = useStaticQuery(graphql`
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
      <SearchApp></SearchApp>
      <div className="row">
        {data.allSanityProduct.edges.map(({ node }, i) => {
          return (
            <div key={i} className="col col-sm d-flex justify-content-center">
              <Card
                data={{
                  ...node,
                  description: (
                    <div>
                      <p>{node.description}</p>
                      <span className="badge badge-warning">
                        {node.brand.title}
                      </span>
                      <span className="badge badge-light">
                        {node.category.title}
                      </span>
                      <br />
                      <br />
                    </div>
                  ),
                  imgUrl: node.image.asset.url,
                  docUrl: node.doc && node.doc.asset && node.doc.asset.url,
                  email: data.sanityInfo.contact.email,
                }}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HandleProducts;
