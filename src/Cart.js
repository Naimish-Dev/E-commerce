import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartItems from "./Components/CartItems";
import { useCardContext } from "./context/AddtoCartContext";
import PriceProduct from "./Helper/PriceProduct"
const Cart = () => {
  const { cartTotal, shipping_fee, cartProducts, ClearCartItems } = useCardContext();
  return (<Wrapper>
    <h1>Cart</h1>
    <div className="main_card">
      <div className="Table_header">
        <p className="contant"> Product</p>
        <p className="contant mobile_hide"> Price</p>
        <p className="contant"> quentaty</p>
        <p className=" contant mobile_hide">Amount</p>
        <p className="contant_remove">remove</p>
      </div>
      <div className="Product_body">

        {
          cartProducts?.map((val) => {
            return <CartItems key={val.id}  {...val} />
          })
        }
      </div>
      <div className="carts_butoons">
          <div className="update_cart"><button className="cart_btn clear" onClick={()=>{ClearCartItems()}}>Clear Cart</button></div>
          <div className="update_cart"><button className="cart_btn update"> <NavLink to="/products" > Contunue Shopping</NavLink></button></div>
          <div className="update_cart"><button className="cart_btn update">Update Cart</button></div>
        </div>  
      
    
      <div className="Cart_Other_detais">
        <div><p>Toatl =</p><p><PriceProduct price={cartTotal}/> </p></div>
      
        <div><p>shiping Charges = </p><p><PriceProduct price={shipping_fee}/></p></div>
        <div><p>payable Amount = </p><p><PriceProduct price={shipping_fee + cartTotal} /></p></div>
        <div className="update_cart"><button className="cart_btn place"><NavLink to="/products" > Place Order</NavLink></button></div> 
        
    
      </div>

    </div>
  </Wrapper >)
};

const Wrapper = styled.section`
   padding: 10rem 0 18rem 0;
  
h1{
  text-align:center ;
}
.main_card{
  width:87%;
  margin:3rem auto;
  border:1px solid gray;
}


.Cart_Other_detais{
  margin:3rem 0  ;
  float:right ;
  background-color:#F6F8FA ;
  padding:1rem ;
width: 30rem;

  div{
border-bottom:1px solid gray ;
display:flex ;
justify-content: space-between;
align-items: center;


  }
}
.Product_body{
  max-height:50vh;
  overflow-y: auto;


}

  .Table_header{
border-bottom:1px solid black ;
    background-color : #F6F8FA;
   display: flex;
   justify-content:space-between ;
   align-items: center;
   gap:1rem;
padding: 1rem;
text-align:center ;
p{
  font-size:1.7rem ;
  margin:0 ;
}



}
.contant{
  width:20% ;
}

.contant_remove{
    width:10% ;
}
.carts_butoons{
  display:flex ;
  justify-content:flex-end ;
  align-items: center;
  flex-wrap:wrap ;
}

.cart_btn{
  border:none ;
  background-color:#FB7208;
  border-radius:3px ;
  font-weight:700 ;
  padding:0.5rem 1rem ;
  margin:1rem ;
  color:white;
  border:1px solid #FB7208;
  a{
    color:white;


    
  }
  &:hover{
    background-color:#F6F8FA;
border:1px solid gray;
 color:black;
 a{
  color:black;
 }
  }
  
}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {

.main_card{
  width:100%;
  margin:3rem auto 7rem auto ;
}

 .Table_header{
   p{
     font-size:1.7rem ;
     margin:0 ;
    }
  }
  .mobile_hide{
     display:none ;
     width:0% ;
  }
  .contant{
  width:40% ;
  }
  
  .contant_remove{
    width:15% ;
  }

}
`;

export default Cart;
