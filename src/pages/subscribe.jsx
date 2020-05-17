import React, { Component } from "react";
import Layout from "../components/Layout";
import data from "../../data/data.json";
import Subscribe from "../components/dumps/Subscribe";
import Card from "../components/dumps/Card";

// Esta página existe con la mera funcionalidad de
// ofrecer un link donde las personas puedan
// registrarse al sistema de correos de galatea,
// para saber más de este sistema visite el componente
// "Subscribe"

export class index extends Component {
  render() {
    return (
      <Layout
        active="index"
        title="Galatea"
        dataComponents={data.components}
        generalInformation={data.generalInformation}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Card
              data={{
                title: "Rellena los datos para solicitar una cotización"
              }}
              width="50rem"
            >
              <Subscribe></Subscribe>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;
