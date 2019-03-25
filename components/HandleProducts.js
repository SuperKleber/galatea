import React, { Component } from 'react'
import List from "./dumps/List"
import Products from './Products';
export default class HandleProducts extends Component {
  render() {
    const {data} = this.props
    
    return (
        <div className="container mt-4">
            <List data={data.list}> 
              <Products></Products>
            </List>
        </div>
    )
  }
}
