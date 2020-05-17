const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const myQuery = `{
  allSanityProduct {
    edges {
      node {
        id
        description
        title
        brand {
          title
        }
        category {
          title
        }
        image{
          asset{
            url
          }
        }
        doc{
          asset{
            url
          }
        }
      }
    }
  }
  
}`;
const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => {
      return data.allSanityProduct.edges.map(({ node }) => {
        return {
          id: node.id,
          title: node.title,
          description: node.description,
          category: node.category.title,
          brand: node.brand.title,
          keywords: node.keywords,
          doc: node.doc && node.doc.asset && node.doc.asset.url,
          image: node.image && node.image.asset && node.image.asset.url,
        };
      });
    },
    indexName: "product", // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
    matchFields: ["id"], // Array<String> overrides main match fields, optional
  },
];

module.exports = {
  // ...
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "497ujr2b",
        dataset: "production",

        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["ALGOLIA_APP_ID", "ALGOLIA_API_KEY", "ALGOLIA_API_ADMIN"],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Careful, no not prefix this with GATSBY_, since that way users can change
        // the data in the index.
        apiKey: process.env.ALGOLIA_API_ADMIN,
        indexName: "product", // for all queries
        queries,
        enablePartialUpdates: true, // default: false
      },
    },
  ],
  // ...
};
