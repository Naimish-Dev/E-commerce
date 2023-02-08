import React from 'react'
import styled from 'styled-components';
import {FaCheck} from "react-icons/fa"
import { useState } from 'react';
import CartAmountToggler from './CartAmountToggler';
import { NavLink } from 'react-router-dom';
import {Button}  from '../styles/Button';
import { useCardContext } from '../context/AddtoCartContext';

const Addtocart = ({product}) => {
    const { colors, stock ,id} = product
    const [color, setcolor] = useState(colors[0])
    const [amount, setamount] = useState(1)


    const { addtocart } = useCardContext()

    const setDecrease=()=>{
      amount > 1 ? setamount(amount - 1) : setamount(1)
    }
    
    const  setIncrease=()=>{
        amount < stock ? setamount( amount + 1 ): setamount(stock)
    }

    return (<Wraper>


        <div className="color">
            <p>colors</p>
            <div> {colors.map((val,index)=>{
                return(
                    <button key={index} className={color === val ? "product-color-btn active" : "product-color-btn"}
                        onClick={() => { setcolor(val) }} style={{ backgroundColor: val }}>{color === val? <FaCheck className='checkmark-of-color'></FaCheck>: "" }</button>
                )
            })}
            </div>
        </div>
        <div className='quentaty'>
            <CartAmountToggler amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
            </div>
        <div className='quentaty'>
            <NavLink to={"/cart"} onClick={() => {addtocart(id, color, amount, product)}}>
            <Button> Add to Cart</Button>
            </NavLink>

            </div>
    </Wraper>
    )
}
const Wraper = styled.section`

margin: 1rem 0;


.color{
    display:flex ;
    gap:1rem;
    align-items:center ;

    p{
        font-size:1.5rem ;
    }
}
.checkmark-of-color{
    color:white ;
}

.product-color-btn{
    border-radius: 50%;
    border:0;
    line-height:0.5rem ;
    outline:0 ;
    margin:0.5rem  1rem ;
    padding:0.2rem ;
    width:2rem ;
    height:2rem ;
opacity:0.7 ;
}
.active{
     opacity:2 ;

 }
`
export default Addtocart;

