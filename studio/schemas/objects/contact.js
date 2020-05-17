export default {
  name: "contact",
  title: "Información de contacto",
  type: "object",
  fields: [
    {
      name: "tel",
      title: "Teléfono",
      type: "string",
    },
    {
      name: "whatsapp",
      title: "Whatsapp",
      type: "string",
    },
    {
      name: "email",
      title: "Correo electrónico",
      type: "string",
    },
    {
      name: "address",
      title: "Dirección",
      type: "text",
      rows: 3,
    },
  ],
};
