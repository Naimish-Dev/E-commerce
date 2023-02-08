import React from 'react'
import styled from 'styled-components'
import {Button} from "../styles/Button"
const CartAmountToggler = ({id, amount, setDecrease,setIncrease}) => {
  return (<Wraper>


    <div className='indenumber'> 

          <Button className='btnid' onClick={setDecrease}> -</Button>
<div className='quentaty'> {amount}</div>
          <Button className='btnid'  onClick={setIncrease}> +</Button>

    </div>
  </Wraper>
  )
}

const Wraper = styled.section`

.indenumber{
    display:flex ;
    gap:2rem;
    align-items:center ;
    margin:1rem 0 ;
}

.quentaty{
    font-size:2rem ;
    font-weight:700 ;
}
.btnid{
    background-color:${({ theme }) => theme.colors.bg} ;
    border:1px solid whitesmoke ;
    height:3rem;
    line-height:1rem ;
    color:black ;
    font-size:2rem ;
    outline:none ;
    transition:all 1s ;
    
  
}
`;
export default CartAmountToggler;