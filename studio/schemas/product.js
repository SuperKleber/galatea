import { FiBox } from "react-icons/fi";
export default {
  name: "product",
  title: "Producto",
  type: "document",
  icon: FiBox,
  fields: [
    {
      name: "title",
      title: "Nombre del producto",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción del producto",
      type: "text",
      rows: 3,
    },
    {
      name: "category",
      title: "Categoría del producto",
      description:
        "Ejemplo: carro de suministro | Puede agregar más categorías en la sección 'Categorías de productos'",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "brand",
      title: "Marca del producto",
      description:
        "Puede agregar más marcas en la sección 'Marcas e industrias'",
      type: "reference",
      to: { type: "brand" },
    },
    {
      name: "image",
      title: "Imagen del producto",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "doc",
      title: "Documento del producto",
      description: "(Opcional)",
      type: "file",
    },
  ],
};
