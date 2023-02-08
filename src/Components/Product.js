import React from "react"
import { NavLink } from "react-router-dom";
import PriceProduct from "../Helper/PriceProduct";
import {Button} from "../styles/Button"
const Product = ({ data }) => {

    return (<>

            <div className="card" >
                <div className="Order_btn"> <NavLink to={`/SingleProduct/${data.id}`}><Button> Order</Button></NavLink></div>
                <img src={data.image} alt="Products" />
                <div className="card_footer">
                    <p>{data.name}</p>
                    <p><PriceProduct price={data.price}></PriceProduct></p>
                </div>
            </div>
    
    </>)
}




export default Product;