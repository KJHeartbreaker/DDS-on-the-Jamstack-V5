// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import * as blocks from "./blocks";
import * as docs from "./documents";
import * as objects from "./objects";
import * as components from "./components";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  types: schemaTypes.concat([
    ...Object.values(blocks),
    ...Object.values(docs),
    ...Object.values(objects),
    ...Object.values(components),
  ]),
});
