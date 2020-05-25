import { GrAnalytics } from "react-icons/gr";
export default {
  name: "section",
  title: "Sección de productos",
  description: "ejemplo: seguridad industrial",
  type: "document",
  icon: GrAnalytics,
  fields: [
    {
      name: "title",
      title: "Sección",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción de la sección",
      type: "text",
    },
    {
      name: "image",
      title: "Imagen de la sección",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
