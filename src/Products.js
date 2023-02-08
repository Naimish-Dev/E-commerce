import React from "react";
import styled from "styled-components";
import AllProduct from "./Components/AllProduct";
import Sort from "./Components/Sort";
import Filter from "./Components/Filter";
const Products = () => {

  
  return <Wrapper>
    <div className="main-filter-product"> 
    <div className="filter">
      <Filter></Filter>
       </div>
    
    <div className="main-product-sort">
      <div className="sort">
        <Sort></Sort>
        </div> 
      <div className="allproduct">
        <AllProduct></AllProduct>
        </div> 
      </div> 
    </div>
    </Wrapper>;
};

const Wrapper = styled.section`
font-size:1.5rem ;
padding:10rem 8rem ;

.main-filter-product{
  display: flex;
  gap:1rem;
  justify-content: space-around;
}

.filter{
    margin-top:1rem;  
    padding:1rem;
    width:25% ;
    background-color:${({theme})=>theme.colors.bg} ;

}
.main-product-sort{
  width:75% ;
 display: flex;
 flex-direction: column;
  gap:1rem;

}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  padding:1rem 5rem;

.main-filter-product{
  display: flex;
  flex-direction:column ;
  gap:1rem;
  justify-content: space-around;
  
  .filter{
    width:100% ;
  }
  .main-product-sort{
    width:100% ;
  }
}
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding:0rem;
  }
  
  `;

export default Products;
