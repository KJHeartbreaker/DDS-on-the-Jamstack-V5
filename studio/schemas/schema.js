// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// import * as blocks from "./blocks";
import * as docs from "./documents";
import * as objects from "./objects";
// import * as components from "./components";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
// import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "DDS Studio",
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    ...Object.values(docs),
    ...Object.values(objects),
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
