import React from "react";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import data from "../../data/data.json";
import HandleServices from "../components/HandleServices";
const Servicios = () => {
  return (
    <Layout active="servicios">
      <HandleServices></HandleServices>
    </Layout>
  );
};

export default Servicios;
