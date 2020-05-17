import React, { Component } from "react";
import Subscribe from "./dumps/Subscribe";
import { useStaticQuery, graphql, Link } from "gatsby";
// Este componente contiene la información de contacto de la empresa
// PROPS:
// "data": es la información del componente del footer
// "generalInformation": es la información general de la empresa galatea

function Column({ title, children }) {
  return (
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      <h6 className="text-uppercase font-weight-bold">{title}</h6>
      <hr
        className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: "60px" }}
      />

      {children}
    </div>
  );
}
const Footer = () => {
  const data = useStaticQuery(graphql`
    query Info {
      sanityInfo {
        id
        name
        contact {
          address
          email
          tel
          whatsapp
        }
      }
    }
  `);
  const info = data.sanityInfo;
  return (
    <footer
      className="page-footer font-small unique-color-dark mt-4"
      id="footer"
    >
      <div className="container mt-4">
        <h6 className="text-center">
          ¿Te interesaría recibir noticias sobre nuevos productos y servicios?
        </h6>
        <h6 className="text-center text-muted">Bríndanos tu contacto</h6>
        <Subscribe emailOnly={true}></Subscribe>
      </div>
      <div className="Contact container text-center text-md-left mt-5">
        <div className="row mt-3">
          <Column title="Nuestra dirección">
            <div
              className="d-flex flex-column justify-content-center "
              style={{ width: 130 }}
            >
              {info.contact.address}
            </div>
          </Column>
          <Column title="contacto">
            <p>
              <a href={`tel:${info.contact.tel}`}>
                Teléfono: {info.contact.tel}
              </a>
            </p>
            <p>
              <a
                href={`https://api.whatsapp.com/send?phone=${info.contact.whatsapp.replace(
                  /\+| /g,
                  ""
                )}`}
              >
                Whatsapp: {info.contact.whatsapp}
              </a>
            </p>

            <p>
              <a href={`mailto:${info.contact.email}`}>{info.contact.email}</a>
            </p>
          </Column>
        </div>
      </div>

      <div className="Copyright footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright:
        <Link to="/">{info.name}</Link>
      </div>

      <style jsx="true">{`
        #footer {
          background: #fafafa;
          padding-top: 36px;
        }
        .FollowUs {
          background: #59bb45;
          color: rgba(255, 255, 255, 0.6);
        }
        .Contact {
        }
        .Copyright {
          background: #1c2331;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </footer>
  );
};
export default Footer;
