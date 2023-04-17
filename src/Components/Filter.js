import React from 'react'
import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext'
import PriceProduct from '../Helper/PriceProduct';

import { Button } from '../styles/Button';
const Filter = () => {
  const { filter: { text, category, company, color, maxPrice, price, minPrice }, searchProductValue, all_products, cleareFilterhendler } = useFilterContext()

  const Filtercategory = (data, property) => {
    let uniqueFilterValue = data.map((val) => {
      return val[property]
    })

    if(property === "colors"){
      // return (uniqueFilterValue =["all", ...new Set([].concate(...uniqueFilterValue))])
          uniqueFilterValue = uniqueFilterValue.flat();
    }

      return uniqueFilterValue = ["all", ...new Set(uniqueFilterValue)] 
  }

  const CreateFiltercategory = Filtercategory(all_products, "category")
  const CreateFiltercompany = Filtercategory(all_products, "company")
  const CreateFilterColors = Filtercategory(all_products, "colors")

  return (
    <Warper className='filter_box'>
      <form className='serch_item_box' onSubmit={(e) => e.preventDefault()}>
        <input type="text" className='Serch_box' placeholder='Search Product' name="text" val={text} onChange={searchProductValue} />

      </form>
      <div className='category'>
        <h3> category</h3>
        <div className='category_align'>
          {
            CreateFiltercategory.map((val, index) => {
              return <button key={index} className='btns' name="category" value={val} onClick={searchProductValue}>  {val}</button>

            })
          }
        </div>
      </div>
      <div className='category'>
        <h3> Company</h3>
        <select className='category_align' name="company"  onClick={searchProductValue}>
          {
            CreateFiltercompany.map((val, index) => {
              return <option key={index}  value={val} > {val}</option>
            })
          }
        </select>
      </div>
      <div className='category'>
        <h3> Colors</h3>
        <div>
          {
            CreateFilterColors.map((val, index) => {

              if(val === "all"){
                return <button className='product-color-btn' key={index} value={val} name="color" onClick={searchProductValue} > all</button>
              }
              return <button style={{ backgroundColor: val }} key={index} className='product-color-btn' value={val} name="color" onClick={searchProductValue} > {color === val ? <FaCheck className='selected'/>: "" }</button>
            })
          }
        </div>
      </div>
       <div className='category'>
        <h3> Price</h3>
        <div>
      <p> <PriceProduct price={price}/> </p>
      <div><input type="range" name="price" onChange={searchProductValue} max={maxPrice} value={price} min={minPrice}/></div> 
       </div>
      </div>
      <div className='category'>
        <div>
          <Button onClick={cleareFilterhendler}>Cleare Filter</Button>
        </div>
      </div>




    </Warper>

  )
}


const Warper = styled.section`
  padding: 0;
  margin: 0;
  
  .serch_item_box {
    input {
      color: ${({ theme }) => theme.colors.black};
      padding: 0.5rem 1rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      text-transform: uppercase;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    }
  }

  .category {
    margin: 0.5rem;

    h3 {
      margin: 0.5rem 0;
    }
  }
  .category_align {
    display: flex;
    flex-direction: column;

    .btns {
      width: 10rem;
      border: none;
      border-bottom: 1px solid orange;
      border-radius: 5px;
      margin: 0.5rem;
    }
  }
  .product-color-btn {
    border-radius: 50%;
    border: 0;
    line-height: 0.5rem;
    outline: 0;
    margin: 0.5rem 1rem;
    padding: 0.2rem;
    width: 2rem;
    height: 2rem;
    background-color: white;
  }

  .selected {
    color: white;
    margin: 0;
  }
`;
export default Filter