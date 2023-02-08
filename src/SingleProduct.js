import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, memo } from "react";
import { UseProductContext } from "./context/ProductContext";
import PageNavagation from "./Components/PageNavagation";
import ImagesProduct from "./Components/ImagesProduct";
import PriceProduct from "./Helper/PriceProduct";
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import StarRating from "./Components/Star-Rating";
import Addtocart from "./Components/Addtocart";


const url = "https://api.pujakaitem.com/api/products"
const SingleProduct = () => {

    const { SingleProduct, isSinglLoding, SingleProductData } = UseProductContext();
    const { id } = useParams();
    const { id: newid, image,  name, company, description,  price, reviews,  stars, stock } = SingleProduct;


    useEffect(() => {
        SingleProductData(`${url}?id=${id}`);
    }, [id]);

    if (isSinglLoding) {
        return <h1> loding...</h1>
    }

    return <Wrapper>
        <PageNavagation title={name} />
        <div className="container">
            <div className="main_part">
                <div className="img_part">
                    <ImagesProduct imgs={image}></ImagesProduct>
                </div>
                <div className="detail_part">
                    {/* <DetailsProduct details={SingleProduct}> </DetailsProduct> */}

                    <h2>{name} </h2>
                    <StarRating star={stars} className="p-margin" />
                    <p className='p-margin'>{reviews} <spn>reviews</spn></p>
                    <p className="product_data_price  p-margin">MRP : <del> <PriceProduct price={price + 25000} /> </del>
                    </p>
                    <p className="product_data_price product_data_real_price p-margin">MRP : <PriceProduct price={price} />
                    </p>
                    <p className='p-margin'> {description}</p>
                    <div className="product-warranty-data">
                        <div className="product-data-warranty">
                            <TbTruckDelivery className="warranty-icon" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="product-data-warranty">
                            <TbReplace className="warranty-icon" />
                            <p>30 Days <p> Replacement</p></p>
                        </div>
                        <div className="product-data-warranty">
                            <MdSecurity className="warranty-icon" />
                            <p>2 year Wranty</p>
                        </div>
                        <div className="product-data-warranty">
                            <TbTruckDelivery className="warranty-icon" />
                            <p>Free Delivery</p>
                        </div>

                    </div>
                    <div className="Data_info">
                        <p>Available :<spn>  {stock ? "In stock" : "Not Available"}</spn></p>
                        <p>Id :<spn>  {newid}</spn></p>
                        <p>Brand :<spn>  {company}</spn></p>
                    </div>
                    <hr />{ stock > 0 && <Addtocart product={SingleProduct}/>}
                </div>
            </div>
        </div>
    </Wrapper>;
}

const Wrapper = styled.section`


.img_part, .detail_part{
    width:50%;
}

.main_part{
  display:flex ;
 gap:1rem;
 justify-content:space-evenly ;
 align-items:center ;
 margin: 3rem auto;
}


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  .container {
    padding:1rem ;
  } 
.img_part, .detail_part{
    width:80%;
} }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .main_part{
        flex-wrap:wrap ;
         margin: 0;

    }
    
  }

.product_data_price{
    color: red;
}
.product_data_real_price{
    color:green;
}
.hr{
    margin:1rem 0 ;
    color:black ;
}
p{
    font-size:1.3rem ;
    margin:0rem 0 ;
}

.Data_info{
    margin:2rem 0;
}
.p-margin{
    margin:0.5rem 0 ;
}
spn{
  color  : gray;
  /* font-weight:600 ; */
}
.product-warranty-data{
    display:flex ;
    justify-content: space-between;
    flex-wrap:wrap ;
    gap:2rem;
    align-items:center ;
    text-align: center;
    margin:1rem 0 ;


    .product-data-warranty{
        background-color: ${({ theme }) => theme.colors.bg};
        width:13rem ;
        height:8rem ;
        padding: 1rem;
        border-radius:1rem ;
        p{font-size:1.2rem ;
    }}
   .warranty-icon{
        font-size:3rem ;
        background-color:#FB7208;
        color:white ;
        font-weight:600 ;
        border-radius:50% ;
        padding:5px;
    }
}

`;

export default memo(SingleProduct);
