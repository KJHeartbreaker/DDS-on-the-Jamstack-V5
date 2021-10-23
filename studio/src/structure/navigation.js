import S from "@sanity/desk-tool/structure-builder";
import { GiFootprint } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
// import { CgMenuHotdog } from "react-icons/cg";
import { GrNavigate } from "react-icons/gr";

const navigation = S.listItem()
  .title("Navigation")
  .icon(GrNavigate)
  .child(
    S.list()
      .title("Primary Navigation")
      .items([
        S.documentListItem()
          .schemaType("nav")
          .title("Primary Navigation")
          .icon(MdMenu)
          .child(
            S.document().schemaType("nav").documentId("primaryNavigation")
          ),
        S.documentListItem()
          .schemaType("footer")
          .title("Footer")
          .icon(GiFootprint)
          .child(S.document().schemaType("footer").documentId("footer")),
      ])
  );

export default navigation;
