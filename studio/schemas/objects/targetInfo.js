export default {
  name: "targetInfo",
  title: "Secciones de productos",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      description: "Advertencia: Este título se usará para buscar productos",
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 2,
    },
  ],
};
