import React, { Component } from 'react'
import Layout from '../components/Layout';
import Sections from "../components/Sections"
import data from "../data/data.json"
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import Lamp from '../components/dumps/Lamp';
import Carousel from "../components/Carousel"
export class index extends Component {
  render() {
    return (
      <Layout 
      active="index" 
      title="Galatea" 
      dataComponents={data.components}
      generalInformation={data.generalInformation}>
        <Lamp description={data.generalInformation.description}></Lamp>
        {/* <Carousel></Carousel> */}
        <Sections data={data.components.sections}></Sections>
        {/* <Offers data={data.components.offers}></Offers> */}
      </Layout>
    )
  }
}

export default index
