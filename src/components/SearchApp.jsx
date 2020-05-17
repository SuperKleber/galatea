import React, { useState } from "react";
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

let searchClient = algoliasearch("0000", "0000");
try {
  searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );
} catch (error) {}
const SearchBox = ({ refine, isSearchStalled, onFocus, onBlur }) => {
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
    }
  `);
  const categories = data.allSanityCategory.edges;
  const brands = data.allSanityBrand.edges;
  const [value, setValue] = useState("");
  const change = (value) => {
    refine(value);
    setValue(value);
    onFocus();
  };
  return (
    <div className="">
      <div className="d-flex flex-wrap">
        <p className="mr-3">Marcas:</p>
        <div className="d-flex flex-wrap">
          {brands.map(({ node }, i) => {
            return (
              <button
                key={i}
                onClick={() => change(node.title)}
                className="mr-1 btn btn-warning"
              >
                {node.title}
              </button>
            );
          })}
        </div>
      </div>
      <br />
      <div className="d-flex flex-wrap">
        <p className="mr-3">Categorías:</p>
        <div className="d-flex flex-wrap">
          {categories.map(({ node }, i) => {
            return (
              <button
                key={i}
                onClick={() => change(node.title)}
                className="mr-1 btn btn-light"
              >
                {node.title}
              </button>
            );
          })}
        </div>
      </div>
      <br />
      <div className="input-group mb-3">
        <input
          value={value}
          className="form-control"
          onFocus={onFocus}
          onBlur={onBlur}
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
const Hits = ({ hits }) => {
  return (
    <div className="row">
      {hits.map((hit, i) => {
        return (
          <div className="col col-sm d-flex justify-content-center" key={i}>
            <Card
              style={{}}
              data={{
                ...hit,
                title: <Highlight hit={hit} attribute="title" />,
                description: (
                  <div className="">
                    <Highlight hit={hit} attribute="description" />
                    <br />
                    <span className="badge badge-warning">
                      <Highlight hit={hit} attribute="brand" />
                    </span>
                    <span className="badge badge-light">
                      <Highlight hit={hit} attribute="category" />
                    </span>
                  </div>
                ),
                imgUrl: hit.image,
              }}
            ></Card>
          </div>
        );
      })}
      <style jsx="true">
        {`
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
const SearchApp = () => {
  const [startSearch, setStartSearch] = useState(false);
  return (
    <div className="container searchApp" style={{ marginBottom: 32 }}>
      <InstantSearch searchClient={searchClient} indexName="product">
        <CustomSearchBox
          onFocus={() => setStartSearch(true)}
          onBlur={() => setTimeout(() => setStartSearch(false), 100)}
        />
        {startSearch && <CustomHits></CustomHits>}
        <Configure hitsPerPage={5}></Configure>
      </InstantSearch>
      <style jsx="true">{`
        .searchApp {
          padding: 32px 8px;
          background: #c8e6c280;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};
export default SearchApp;
