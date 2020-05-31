export default {
  name: "setting",
  title: "Configuracion del sitio web",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "carousel",
      title: "Carrusel de imágenes",
      description: "Banners de la página principal",
      type: "array",
      of: [{ type: "carousel" }],
    },
    {
      name: "targetInfo",
      title: "Segmentos de productos",
      description: "Describa las secciones de sus productos",
      type: "array",
      of: [{ type: "targetInfo" }],
    },
  ],
};
