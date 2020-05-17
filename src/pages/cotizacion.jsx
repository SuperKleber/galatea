import React from "react";
import Layout from "../components/Layout";
import Subscribe from "../components/dumps/Subscribe";

const Cotizacion = () => {
  return (
    <Layout active="cotización" title="Cotización">
      <Subscribe></Subscribe>
    </Layout>
  );
};

export default Cotizacion;
