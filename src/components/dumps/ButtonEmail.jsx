import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useStaticQuery, graphql } from "gatsby";
const ButtonWhatsapp = ({
  message = "Hola Galatea, quiero info",
  text = "info por email",
}) => {
  const data = useStaticQuery(graphql`
    query Email {
      sanityInfo {
        contact {
          email
        }
      }
    }
  `);
  const email = data.sanityInfo.contact.email;
  const emailMessage = message.replace(/ /g, "%20");

  return (
    <a
      target="_blank"
      href={`mailto:${email}?Subject=${emailMessage}`}
      style={{ marginLeft: "auto", width: "100%" }}
    >
      <button
        className="btn btn-info d-flex justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <AiOutlineMail style={{ fill: "#ffffff", width: 25, height: 25 }} />
        {text}
      </button>
    </a>
  );
};

export default ButtonWhatsapp;
