import S from "@sanity/desk-tool/structure-builder";
import { GoHome, GoSettings } from "react-icons/go";
import { GiOilRig } from "react-icons/gi";
import IframePreview from "../previews/IframePreview";
import navigation from "./navigation";
import pages from "./pages";

// Web preview configuration
const remoteURL = "https://admiring-allen-d046ea.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

const hiddenDocTypes = (listItem) =>
  ![
    "equipmentGrid",
    "gridContainer",
    "integrationContainer",
    "nav",
    "page",
    "siteSettings",
    "used",
  ].includes(listItem.getId());

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(GoSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      navigation,
      S.documentListItem()
        .title("Homepage")
        .schemaType("page")
        .icon(GoHome)
        .child(S.document().schemaType("page").documentId("homepage")),
      pages,
      S.documentTypeListItem("used")
        .title("Equipment Inventory")
        .icon(GiOilRig),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
