import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import {
  Highlight,
  InstantSearch,
  Configure,
  connectHits,
  connectSearchBox,
} from "react-instantsearch-dom";
import Card from "./dumps/Card";
import ButtonWhatsapp from "./dumps/ButtonWhatsapp";

let searchClient = algoliasearch("0000", "0000");
try {
  searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );
} catch (error) {}
const SearchBox = ({
  refine,
  isSearchStalled,
  onFocus,
  onBlur,
  simple,
  defaultSearch,
}) => {
  const data = useStaticQuery(graphql`
    query CategoryBrand {
      allSanityBrand {
        edges {
          node {
            title
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            title
          }
        }
      }
      sanitySetting {
        targetInfo {
          title
        }
      }
    }
  `);
  const categories = data.allSanityCategory.edges;
  const targetInfo = data.sanitySetting.targetInfo;
  const brands = data.allSanityBrand.edges;
  const [value, setValue] = useState("");
  let search = value !== "" ? value : defaultSearch ? defaultSearch : "";
  const change = (search) => {
    refine(search);
    setValue(search);
    onFocus();
  };

  useEffect(() => {
    setTimeout(() => {
      if (defaultSearch) {
        change(defaultSearch);
      }
    }, 500);
  }, []);

  return (
    <div className="">
      {!simple && (
        <div className="mb-4">
          <div className="d-flex mb-1 flex-wrap">
            <div className="dropdown  mr-2">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="categories"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorías
              </button>
              <div className="dropdown-menu" aria-labelledby="categories">
                {categories.map(({ node }, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => change(node.title)}
                      className="dropdown-item"
                    >
                      {node.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="dropdown mr-2">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="brands"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Marcas
              </button>
              <div className="dropdown-menu" aria-labelledby="brands">
                {brands.map(({ node }, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => change(node.title)}
                      className="dropdown-item"
                    >
                      {node.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {targetInfo.map(({ title }, i) => {
            return (
              <button
                key={i}
                onClick={() => change(title)}
                className="btn btn-success mr-2"
                type="button"
              >
                {title}
              </button>
            );
          })}
        </div>
      )}
      <div className="input-group ">
        <input
          value={search}
          style={{
            color: "#28a745",
            fontSize: search !== "" ? "1.2em" : "",
            fontWeight: search !== "" ? "bold" : "",
          }}
          className="form-control"
          onFocus={onFocus}
          // onBlur={onBlur}
          placeholder="Busque sus productos"
          type="search"
          onChange={(event) => change(event.currentTarget.value)}
          aria-describedby="button-addon1"
        ></input>
        <div className="input-group-prepend">
          <button
            onClick={onBlur}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
const Hits = ({ hits, simple, filter = true }) => {
  console.log(hits);
  return (
    <div className="">
      {!simple && <h3>Resultados de búsqueda </h3>}
      <div className={simple ? "d-flex flex-wrap" : "card-columns"}>
        {hits.map((hit, i) => {
          return (
            <Card
              key={i}
              button={
                <ButtonWhatsapp
                  message={`👋Hola Galatea, quiero información de ${hit.title}`}
                  text={simple ? "Info" : `Pedir producto`}
                />
              }
              style={{ width: simple ? "100%" : "" }}
              horizontal={simple}
              data={{
                ...hit,
                title: <Highlight hit={hit} attribute="title" />,
                description: (
                  <div className="">
                    {!simple && (
                      <div>
                        <Highlight hit={hit} attribute="description" />
                        <br />
                      </div>
                    )}
                    {hit.brand && (
                      <>
                        <div>
                          {!simple && <h6>Marca:</h6>}
                          <span className="badge badge-warning">
                            <Highlight hit={hit} attribute="brand" />
                          </span>
                        </div>
                      </>
                    )}
                    {hit.category.length !== 0 && (
                      <>
                        {!simple && <hr />}
                        <div className="Category">
                          {!simple && <h6>Categorías:</h6>}

                          <Highlight
                            className=""
                            hit={hit}
                            attribute="category"
                          />
                        </div>
                      </>
                    )}
                    {hit.services.length !== 0 && !simple && (
                      <>
                        <hr />
                        <div className="Services">
                          <h6>Servicios:</h6>
                          <Highlight
                            className=""
                            hit={hit}
                            attribute="services"
                          />
                        </div>
                      </>
                    )}
                    {!simple && <br />}
                  </div>
                ),
                imgUrl: hit.image,
              }}
            ></Card>
          );
        })}
      </div>
      {hits.length === 0 && (
        <div className="alert alert-warning" role="alert">
          No se encontraron resultados
        </div>
      )}
      {simple && (
        <Link
          className="btn btn-primary"
          style={{ width: "100%", margin: "8px 0" }}
          to="/products"
        >
          Búsqueda avanzada
        </Link>
      )}
      <style jsx="true">
        {`
          .Category span {
            background: #fafafa;
            font-weight: bold;
            font-size: 0.9em;
            padding: 2px;
            border-radius: 4px;
          }
          .ais-Highlight-highlighted {
            // background: #03a9f4;
            background: #c8e6c2;
          }
        `}
      </style>
    </div>
  );
};
const CustomHits = connectHits(Hits);
const CustomSearchBox = connectSearchBox(SearchBox);
const SearchApp = ({ simple, limit, defaultSearch }) => {
  const [startSearch, setStartSearch] = useState(false);

  return (
    <div className="searchApp">
      <InstantSearch searchClient={searchClient} indexName="product">
        <CustomSearchBox
          defaultSearch={defaultSearch}
          simple={simple}
          onFocus={() => setStartSearch(true)}
          onBlur={() => setTimeout(() => setStartSearch(false), 100)}
        />
        {startSearch && <CustomHits simple={simple}></CustomHits>}
        {limit ? <Configure hitsPerPage={limit} /> : <Configure />}
      </InstantSearch>
      <style jsx="true">{``}</style>
    </div>
  );
};
export default SearchApp;
