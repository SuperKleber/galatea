import React from 'react'
import Responsive from "./Responsive"
import Card from "./Card"
export default class Product extends React.Component {
    state={clickProduct:false}
    handleClickProduct=()=>{
        console.log(this.props.data)
        this.setState({
            clickProduct: false
            // esta función sirve para cambiar el estilo del producto al hacer click, ahora la función retorna "false" porque esta función está desactivada de momento
        })
    }
    render(){
        const {data, handleClickProduct,clickProduct} = this.props
        return (
            <div>
                <div onClick={this.handleClickProduct} className={`product m-2 ${this.state.clickProduct && "fullScreen"}`}>
                    <a href={data.docs && data.docs.docUrl || null}>
                        <Responsive.Default>
                            <Card data={data} height={`240px`}></Card>
                        </Responsive.Default>
                        <Responsive.Mobile>
                            <Card data={data} height={`150px`} width="9rem"></Card>
                        </Responsive.Mobile>
                    </a>
                </div>
                <style jsx>{`
                    .fullScreen{
                        position: fixed;
                        top: 25svh;
                        left: 50vw;
                        z-index:3;
                        transform: scale(2)  !important;
        
                    }
                    .product{
                        cursor:pointer !important;
                        transition: .2s !important;
                    }
                    .product:hover{
                        transform: scale(1.05) !important;
                    }
                `}</style>

            </div>
        )
    }
}
