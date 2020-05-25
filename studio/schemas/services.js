import { MdRoomService } from "react-icons/md";
export default {
  name: "services",
  title: "Servicios",
  description: "ejemplo: instalación de productos",
  type: "document",
  icon: MdRoomService,
  fields: [
    {
      name: "title",
      title: "Título del servicio",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción del servicio",
      type: "string",
    },
    {
      name: "image",
      title: "Imagen del servicio",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
