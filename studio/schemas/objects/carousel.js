export default {
  name: "carousel",
  title: "Banner",
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
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "string",
    },
  ],
};
