import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import * as docs from "./documents";
import * as objects from "./objects";
import * as components from "./components";

export default createSchema({
  name: "DDS Studio",
  types: schemaTypes.concat([
    ...Object.values(components),
    ...Object.values(docs),
    ...Object.values(objects),
  ]),
});
