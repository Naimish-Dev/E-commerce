import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';


const ImagesProduct = ({ imgs = [{ url: "" }] }) => {
  const [mainimg, setmainimg] = useState(imgs[0].url)
  return (
    <Wraper>

      <div className='all-img-Product'>
        <div className='main-img-Product'>
          <img className='main-product-img' src={mainimg} alt="main-product" />
        </div>
        <div className='other-img-product'>

          {imgs.map((val, id) => {
            return <img  onClick={(val) => { setmainimg(imgs[id].url) }} className='all_img' key={id} alt="product_img" src={val.url} />
          })}

        </div>


      </div>
    </Wraper>
  )
}


const Wraper = styled.section`
.all-img-Product{
  display:flex ;
align-items:center ;
gap:2rem;
}
.main-product-img{
  width:30rem;
  height:20rem;
}
.other-img-product{
  display: flex;
flex-direction:column ;
gap:2rem;
}
.all_img{
  width:15rem;
  height:10rem;
  object-fit:cover ;
}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
 
.all-img-Product{
  display:flex ;
  flex-direction:column ;
align-items:center ;
gap:2rem;
}
.all_img{
  width:9rem;
  height:7rem;
  object-fit:cover ;
}
 
    .other-img-product{
flex-direction:row ;
flex-wrap:wrap ;
gap:2px;
}
  }
`;
export default ImagesProduct;
