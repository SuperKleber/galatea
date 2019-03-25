import React, { Component } from 'react'
import Card from "./dumps/Card"
export default class Products extends Component {
    state={responsive:false}
  render() {
    const {category, description, products} = this.props.data
    return (
      <div className="Products container-fluid">
        {/* {category && <h3 className="row bg-primary text-white p-2 rounded">{category}</h3>} */}
        {description && <h5 className="row text-secondary p-3 rounded">{description}</h5>}
        {
            products &&
            <div className="row">
                {
                    products.map((element)=>{
                        return(
                            <div className="product m-2">
                                <Card data={element}></Card>

                            </div>

                        )
                    })
                }
            </div>
        }
        <style jsx>{`
            .product{
                cursor:pointer;
                transition: .2s;
            }
            .product:hover{
                transform: scale(1.05)
            }
        `}</style>
      </div>
    )
  }
}
