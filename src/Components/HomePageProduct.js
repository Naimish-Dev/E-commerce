import React from "react"
import styled from "styled-components"
import { UseProductContext } from "../context/ProductContext"
import Product from "./Product"
const HomePageProduct = () => {


    const { isLoding, HomePageProduct } = UseProductContext();
    if (isLoding) {
        return <h1> ...loding </h1>
    }
    return <Warper>

        <div className="for_bg">
            <div className="container">
                <div>
                    <p>Click Now</p>
                    <h2>Our Best Products</h2> </div>
                <div className="Dflex"> {HomePageProduct.map((value, index) => {
                    return (
                        <Product data={value} key={index} />
                    )
                })}</div>
            </div>

        </div>
    </Warper>
}


const Warper = styled.section`
a{
    color:black;
    text-decoration:none ;
    
    
    &:hover{
        
        text-decoration:none ;
}
}
.container{
    padding: 2rem 0;
}

.Dflex{
    display:flex ;
    justify-content:space-around ;
    align-items:center ;
flex-wrap:wrap ;
}

.card{
background-color:white ;
padding:1rem ;
width:25rem;
height:25rem ;
text-align:center ;
margin:2rem 0;
overflow:hidden;
transition:all 1s ;
position:relative ;
box-shadow:0px 1px 10px 1px gray ;

.Order_btn{
    position:absolute ;
    top:50% ;
    left:50% ;
    transform:translate(-50% ,-50%) ;
    z-index:10;
    visibility:hidden ;
}

&:hover .Order_btn{
    visibility:visible;
}

&::before{
    content:"" ;
    width:100% ;
    height:100% ;
    position:absolute ;
    top:0 ;
    left:0 ;
    transform:translateX(100%) ;
    background-color:rgba(0,0,0,0.3) ;
transition:all 1s ;
}

&::after{
    content:"" ;
    width:100% ;
    height:100% ;
    position:absolute ;
    top:0 ;
    left:0 ;
    transform:translateX(-100%) ;
    background-color:rgba(0,0,0,0.3) ;
    transition:all 1s ;
}

&:hover::after{
    transform:translateX(-50%) ;


}
&:hover::before{
    transform:translateX(50%) ;


}
&:hover{
    transform:scale(1.1) ;
    box-shadow:none ;
}

img{
    width:20rem ;
    height:18rem ;
    margin: 0 auto ;
    object-fit:scale-down;
}

.card_footer{
display:flex ;
justify-content:space-between ;
margin:0.5rem 0;
padding:0.5rem ;
border-top: 1px solid black;

p{
    text-overflow:ellipsis ;
}
}
}
`



export default HomePageProduct;