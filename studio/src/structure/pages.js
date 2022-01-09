import S from "@sanity/desk-tool/structure-builder";
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoHome as Home,
} from "react-icons/go";
import { MdWeb } from "react-icons/md";
import { FaIcons } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { GiCobweb, GiSpiderWeb, GiToolbox } from "react-icons/gi";
import { BsFillPersonLinesFill, BsStarFill, BsBuilding } from "react-icons/bs";
import { GrResources, GrFastForward } from "react-icons/gr";

// import PreviewIFrame from "../components/previewIFrame";

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

const pages = S.documentTypeListItem("page")
  .title("Page Builder")
  .icon(GiCobweb);

export default pages;
