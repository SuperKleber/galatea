import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Información del negocio")
        .child(S.editor().id("info").schemaType("info").documentId("info"))
        .icon(MdBusiness),
      S.listItem()
        .title("Configuracion del sitio web")
        .child(
          S.editor().id("setting").schemaType("setting").documentId("setting")
        )
        .icon(AiFillSetting),
      ...S.documentTypeListItems().filter(
        (listItem) => !["info", "setting"].includes(listItem.getId())
      ),
    ]);
