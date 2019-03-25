import React, { Component } from 'react'
import Layout from '../components/Layout';
import HandleProducts from '../components/HandleProducts';
import data from "../data/data.json"
export default class products extends Component {
  render() {
    return (
      <Layout active="products" title="galatea productos">
        <HandleProducts data={data.components.products}></HandleProducts>
      </Layout>
    )
  }
}
