import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Información del negocio")
        .child(S.editor().id("info").schemaType("info").documentId("info"))
        .icon(MdBusiness),
      ...S.documentTypeListItems().filter(
        (listItem) => !["info"].includes(listItem.getId())
      ),
    ]);
