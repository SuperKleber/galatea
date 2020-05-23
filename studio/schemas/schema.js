// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import product from "./product";
import info from "./info";
import category from "./category";
import brand from "./brand";
import setting from "./setting";
import contact from "./objects/contact";
import carousel from "./objects/carousel";
import targetInfo from "./objects/targetInfo";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    product,
    info,
    category,
    brand,
    setting,

    //Objects
    contact,
    carousel,
    targetInfo,
  ]),
});
