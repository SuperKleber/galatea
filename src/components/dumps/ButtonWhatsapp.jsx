import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";
const ButtonWhatsapp = ({
  message = "Hola Galatea, vengo de su sitio web",
  text,
}) => {
  const data = useStaticQuery(graphql`
    query WhatsappNumbers {
      sanityInfo {
        contact {
          whatsapp
        }
      }
    }
  `);
  const whatsappNumber = data.sanityInfo.contact.whatsapp.replace(
    / |_|-|\+|\./g,
    ""
  );
  const whatsappMessage = message.replace(/ /g, "%20");
  const whatsappApi = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
  return (
    <a
      target="_blank"
      href={whatsappApi}
      style={{ marginLeft: "auto", width: "100%" }}
    >
      <button
        className="btn brn-primary d-flex justify-content-center align-items-center"
        style={{ background: "#25d366", color: "#ffffff", width: "100%" }}
      >
        <FaWhatsapp style={{ fill: "#ffffff", width: 25, height: 25 }} />
        {text}
      </button>
    </a>
  );
};

export default ButtonWhatsapp;
