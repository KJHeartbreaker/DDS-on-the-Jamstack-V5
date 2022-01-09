/* eslint-disable import/no-unresolved */
import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";
import UsedEquipmentComponent from "../components/UsedEqipment/UsedEquipmentComponent";

export const query = graphql`
  query UsedPageTemplateQuery($id: String!) {
    post: sanityUsed(id: { eq: $id }) {
      title
      slug {
        current
      }
      itemNumber
      _rawTagline(resolveReferences: { maxDepth: 10 })
      _rawImages(resolveReferences: { maxDepth: 10 })
      price
    }
  }
`;

export default function EquipmentPage(props) {
  const { data, errors } = props;

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    );
  }

  const { post } = data || {};

  return <UsedEquipmentComponent {...post} />;
}
