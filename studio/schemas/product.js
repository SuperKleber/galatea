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
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "promo",
      title: "Promoción del producto",
      description:
        "Este producto será visible en la página de promociones y novedades",
      type: "string",
      validation: (Rule) =>
        Rule.max(7).warning("Recomendación: poner pocos carecteres"),
    },
    {
      name: "services",
      title: "Servicios especiales",
      description: "Añadir servicios especiales para este producto",
      type: "array",
      of: [{ type: "string" }],
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
