import { GrTree } from "react-icons/gr";
export default {
  name: "category",
  title: "Categorías de productos",
  description: "ejemplo: test de alchol",
  type: "document",
  icon: GrTree,
  fields: [
    {
      name: "title",
      title: "Categoría",
      type: "string",
    },
    {
      name: "section",
      title: "Sección, ejemplo: seguridad industrial",
      type: "reference",
      to: { type: "section" },
    },
  ],
};
