import React, { Component } from "react";
import Card from "./dumps/Card";
import Responsive from "./dumps/Responsive";
import Product from "./dumps/Product";

// Aquí es donde se despliega todos los productos solicitados

// props:
// "products" es la información de cada producto individual
// "category" y "description" son texto que se puede añadir en la cabecera de los productos
export default class Products extends Component {
  render() {
    const { category, description, products } = this.props.data;
    return (
      <div className="Products container-fluid">
        {/* {category && <h3 className="row bg-primary text-white p-2 rounded">{category}</h3>} */}
        {/* {description && <h5 className="row text-secondary p-3 rounded">{description}</h5>} */}
        {products && (
          <div className="row justify-content-center">
            {products.map((element) => {
              return (
                <Product data={element} email={this.props.email}></Product>
              );
            })}
          </div>
        )}
        <style jsx="true">{`
          .product {
            cursor: pointer;
            transition: 0.2s;
          }
          .product:hover {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    );
  }
}
