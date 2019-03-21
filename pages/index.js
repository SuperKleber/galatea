import React, { Component } from 'react'
import Layout from '../components/Layout';
import Sections from "../components/Sections"
import data from "../data/data.json"
export class index extends Component {
  render() {
    return (
      <Layout title="galatea.solutions">
        <Sections data={data.components.sections}></Sections>
      </Layout>
    )
  }
}

export default index
