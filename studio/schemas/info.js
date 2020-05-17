export default {
  name: "info",
  title: "Información del negocio",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "name",
      title: "Nombre del negocio",
      type: "string",
    },
    {
      name: "contact",
      title: "Información de contacto",
      type: "contact",
    },
  ],
};
