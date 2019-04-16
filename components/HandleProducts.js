import React, { Component } from 'react'
import List from "./dumps/List"
import Products from './Products';
import Dropdown from './dumps/Dropdown';

// este es el componente que maneja toda la página de "products"
// La razón por la que todas estas funcionalidades no se las maneja 
// directamente en la page de "products" es por mera buena práctica de 
// no llenar de código las pages.

// DOS DEFINICIONES IMPORTANTES
//CATEGORIA: es la funcionalidad de que cumplen un grupo de productos, por ejemplo la categoria de "alcohol" son
// todos los productos que sirven para detectar alcohol en una persona como el "alcotest 6820" o el "alcotest 7510"
//SECTOR: es el concepto en el que contiene las categorias, es decir, en el sector de seguridad insutrail, están
// las categorias de "equipos de rescate" y "carros de suministro", y dentro estas categorías existen productos.

// Este componente contiene a componentes:
// "Dropdown": donde pasaremos la info del sector en el que se vende
// "List": que funciona para cambiar el tipo de producto seleccionado por categoria
// "Products": que son los productos en si mismo

// FUNCIONES:
// "handleActionList": esta función cambia el estado de "inCategory", este estado se le pasa a 
// "Products" que es hijo de "List"

// PROPS:
// "data": es un array de todos los sectores
// "data[n].list": es un array de todas las categorías
// "email": se le pasa al producto para que exista una función de "pedir info" 
// en cada producto que no disponga de mucha información


export default class HandleProducts extends Component {
  state={
    inSector: this.props.data[0],
    inCategory: 0,
    indexCategory: 0
  } 
  handleActionList=(data, index)=>{
    this.setState({
      inCategory: data,
      indexCategory: index
    })
  }
  handleActionDropdown=(data)=>{
    this.setState({
      inSector: data,
      inCategory: data.list[this.state.indexCategory]
    })
  }
  render() {
    const {data,email} = this.props
    
    return (
        <div className="container mt-4">
          <Dropdown data={data} inSector={this.state.inSector} handleActionDropdown={this.handleActionDropdown}>
          </Dropdown>
          <div className="row">
            <div className="col-md-4">
              <List data={this.state.inSector.list}   handleActionList={this.handleActionList}> 
              </List>
            </div>
            <div className="col-md-8">
              <Products email={email} data={this.state.inCategory==undefined ? 0 : this.state.inCategory}></Products>
            </div>
          </div>
          <style jsx>{`
            .container{
              min-height: 80vh;
            }
          `}</style>
        </div> 
    )
  }
}
