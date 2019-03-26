import React, { Component } from 'react'
import List from "./dumps/List"
import Products from './Products';
import Dropdown from './dumps/Dropdown';
export default class HandleProducts extends Component {
  state={
    inSector: this.props.data[0],
    inCategory: this.props.data[0].list[0]
  } 
  handleActionList=(data)=>{
    this.setState({
      inCategory: data
    })
  }
  handleActionDropdown=(data)=>{
    this.setState({
      inSector: data,
      inCategory: data.list[0]
    })
  }
  render() {
    const {data} = this.props
    
    return (
        <div className="container mt-4">
          <Dropdown data={data} inSector={this.state.inSector} handleActionDropdown={this.handleActionDropdown}>
          </Dropdown>
          <List data={this.state.inSector.list} dataChildren={this.state.inCategory} handleActionList={this.handleActionList}> 
            <Products></Products>
          </List>
          <style jsx>{`
            .container{
              min-height: 80vh;
            }
          `}</style>
        </div> 
    )
  }
}
