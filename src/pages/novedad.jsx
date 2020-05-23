import React from "react";
import Layout from "../components/Layout";
import HandleProducts from "../components/HandleProducts";
import data from "../../data/data.json";
const novedad = () => {
  return (
    <Layout
      title="Galatea Novedad"
      active="novedad"
      dataComponents={data.components}
      generalInformation={data.generalInformation}
    >
      <HandleProducts
        data={data.components.sectors}
        email={data.generalInformation.email}
        novedad
      ></HandleProducts>
    </Layout>
  );
};

export default novedad;
