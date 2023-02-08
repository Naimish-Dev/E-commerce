import React from 'react'
import styled from 'styled-components'
import PriceProduct from '../Helper/PriceProduct'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
const ListView = ({ products }) => {
  return (
    <Wraper>
      <div>

        {
          products.map((val,index) => {
            return <div key={index} className='D-flex'>
              <figure>
                <img className="image" src={val.image} alt={val.name} />
              </figure>
              <div className='content'>
                <h3>
                  {val.name}
                </h3>
                <p>{val.description.slice(0,230)}...</p>
                  <PriceProduct  price={val.price}></PriceProduct>
                  <hr/>
                  <NavLink to={`/SingleProduct/${val.id}`}><Button> Read More</Button></NavLink>

              </div>
            </div>
          })
        }

      </div>



    </Wraper>



  )
}


const Wraper = styled.section`

h3{
  font-size:2.5rem ;
  padding:0 ;
  margin:0 ;
}



p{
  margin:1rem 0 ;
}

.D-flex{
  background-color:${({theme})=>theme.colors.bg} ;
  padding: 1rem;
  margin:2rem 1rem;
  display: flex;
  justify-content:space-between ;
  align-items:center ;
  gap:1rem;
border-radius:5px ;
transition:all 0.5s ;


&:hover{
    box-shadow:0px 1px 8px 1px gray ;
  }
 
}

hr{
  margin:1rem 0 ;
}
.content{
  padding:0 2rem ;
}

.image{
  width:25rem;
border-radius:5px ;
}

figure{
  position:relative ;
  padding:2rem;
 background-color:white;
 border-radius:0 ;



}
/* @media (max-width: ${({ theme }) => theme.media.tab}) { */


@media (max-width: ${({theme})=>theme.media.mobile}){

.D-flex{
  background-color:${({ theme }) => theme.colors.bg} ;
  padding: 1rem;
  margin:2rem 1rem;
  display: flex;
  justify-content:space-between ;
  align-items:center ;
  gap:1rem;
border-radius:5px ;
flex-direction:column;
}

}
`;
export default ListView