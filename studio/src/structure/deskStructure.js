import S from "@sanity/desk-tool/structure-builder";
import { GoBrowser as GoHome, GoSettings } from "react-icons/go";
import IframePreview from "../previews/IframePreview";
import navigation from "./navigation";
import pages from "./pages";

// Web preview configuration
const remoteURL = "https://dds-on-the-jamstack-v-5.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
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
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            // "author",
            "category",
            "footer",
            "nav",
            "page",
            "post",
            "siteSettings",
            // "usedEquipment",
          ].includes(listItem.getId())
      ),
    ]);
