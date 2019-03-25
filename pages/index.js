import React, { Component } from 'react'
import Layout from '../components/Layout';
import Sections from "../components/Sections"
import data from "../data/data.json"
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import Lamp from '../components/dumps/Lamp';
export class index extends Component {
  render() {
    return (
      <Layout active="index" title="galatea.solutions">
        <Lamp></Lamp>
        <Sections data={data.components.sections}></Sections>
        <Offers data={data.components.offers}></Offers>
        <Footer data={data.components.footer} generalInformation={data.generalInformation}></Footer>
      </Layout>
    )
  }
}

export default index
