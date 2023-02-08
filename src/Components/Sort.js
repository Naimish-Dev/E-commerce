import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';
const Sort = () => {

  const { filter_products, gride_view, setGrideView, setListView, sortProductHendler } = useFilterContext();


  const grideView = () => {
    setGrideView()
  }
  const listView = () => {
    setListView()

  }

  return (
    <Wraper>
      <div className='sort-btn'>

        <div onClick={grideView} className={gride_view ? "btns active" : "btns"}><BsFillGridFill /></div>
        <div onClick={listView} className={!gride_view ? "btns active" : "btns"}><BsList /></div>
      </div>
      <div>{filter_products.length} Product Available</div>
      <div><form action="#">
        <select id="sortProduct" onClick={sortProductHendler}>

          <option value=""> Short</option>
          <option value="a-z"> A-Z</option>
          <option value="z-a"> Z-A</option>
          <option value="price-high">Price(high)</option>
          <option value="price-low">Price(low)</option>

        </select>
      </form></div>
    </Wraper>
  )
}

const Wraper = styled.section`
display:flex;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.colors.bg};
padding:1rem ;
margin: 1rem 0;


.sort-btn{
  display:flex;
  gap:1rem;
  
  .btns{
    font-size:2rem ;
    padding:0.5rem ;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius:5px ;
    font-weight:800 ;
    
    &:hover{
      background-color: white;
      color:black;
    }
  }
  
  
  .active{
      background-color:#FB7208 ;
      color:white ;
    }

}
`;

export default Sort