import React from 'react'
import styled from 'styled-components'
import CartAmountToggler from './CartAmountToggler'
import { MdDeleteForever } from "react-icons/md";
import { useCardContext } from '../context/AddtoCartContext';
import PriceProduct from "../Helper/PriceProduct"

const CartItems = ({id,name,color,amount,price,image}) => {
  const { RemoveCartItems, IncrimentCartItems, DecrimentCartItems } = useCardContext()
 
  return (
      <Wraper> <div className="Table_data">
          <div className="Product_ditels contant">
              <div>
                  <img className="Product_image" src={image} alt="" />
              </div>
              <div className="d_flex">
          <p>Color: <button className="product-color-btn" style={{ backgroundColor: color }}></button></p>
                  <p>{name}</p>
              </div>
          </div>
          <div className="contant mobile_hide">
              <p> <PriceProduct price={price}/></p>
          </div>
          <div className="contant">
        <p className="Quantity_align"> <CartAmountToggler amount={amount} setDecrease={() =>  DecrimentCartItems(id)} setIncrease={()=>IncrimentCartItems(id)}/></p>
          </div>
          <div className="contant mobile_hide">
        <p> <PriceProduct price={price * amount}/></p>
          </div>
          <div className="contant_remove">
        <button className='Remove_btn' onClick={() => {RemoveCartItems(id)}}> <MdDeleteForever className='RmoveItems_from_Cart' /></button>
          </div>
      </div></Wraper>
  )
}

const Wraper=styled.section`

border-bottom:1px solid black ;
margin:0.5rem;


.Table_data{
  text-align:center ;
  display: flex;
   justify-content:space-between ;
   align-items: center;
      gap:1rem;
padding: 1rem;

.contant{
  width:20% ;
}

.contant_remove{
    width:10% ;
}

.indenumber{
    justify-content:center ;
}

.Product_ditels{
  display: flex;
   align-items: center;
text-align:start ;
p{
   font-size:1.3rem ;
  margin:0 ;
}

   .Product_image{
    width:5rem;
    height:5rem;
    border-radius:5px ;
    margin-right: 1rem;
   }

   .product-color-btn{
    border-radius: 50%;
    border:0;
    outline:0 ;
    padding:0.2rem ;
    width:1.5rem ;    
    height:1.5rem;
  }

}
.Remove_btn{
  outline:none ;
  border:none ;
padding:0.5rem ;
border-radius:50%;
color: black;
transition:all 300ms ;
background-color : #F6F8FA;
&:hover{
  background-color: #FB7208;
  color: white;

}
}
.RmoveItems_from_Cart{
font-size: 2.5rem;
}

}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
.main_card{
  width:100%;
  margin:3rem auto ;
}
.Product_ditels{
    display: flex;
    flex-direction: column;
   align-items:center;
   justify-content:center ;
background-color: yellow;
text-align:start ;
}


.Table_data{
 
 
  &:hover {  
background: #CCC;  
}  

.contant{
  width:40% ;
}
.contant_remove{
    width:15% ;
}
}
.mobile_hide{
   display:none ;
   width:0%;

}
}



`

export default CartItems