import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"

const Service = () => {
    return (<Wraper>
        <div className="container">
            <div className="d-flex">
                <div className="card section1">
                    <TbTruckDelivery className="card_icon" />
                    <p>Super Fats & Free Delevery</p>
                </div>
                <div className=" section2">
                    <div className="uper">
                        <MdSecurity className="card_icon" />
                        <p>Super Fats & Free Delevery</p>

                    </div>
                    <div className="lower">
                        <GiReceiveMoney className="card_icon" />
                        <p>Super Fats & Free Delevery</p>
                    </div>
                </div>
                <div className="card section3">
                   
                    <RiSecurePaymentLine className="card_icon" /> 
                    <p>Super Fats & Free Delevery</p>
                </div>
            </div>
        </div>
    </Wraper>)

}


const Wraper = styled.section`

.d-flex{
align-items:center ;
justify-content:space-between ;
gap:3rem;



.card{
    font-size:1.5rem ;
    background-color:${({ theme }) => theme.colors.bg} ;
    width: 35rem;
    height:20rem;
    border-radius:0.5rem ;
     display: flex;
     flex-direction:column;
     gap:1rem;
     align-items:center ;
     justify-content:center; 
 
    }
 
 .card_icon{
    font-size:3.5rem ;
    background-color:#FB7208 ;
    padding:0.5rem ;
    border-radius:5rem ;
    color:white ;
 }
    .section2{
        font-size:1.5rem ;
        display:flex ;
        flex-direction:column ;
        gap:3rem;
        width: 35rem;
        height:20rem;
    
    .uper, .lower{
        display: flex;
     align-items:center ;
     justify-content:center ;
     gap:1rem;
        height: 9rem;
        border-radius:0.5rem ;
        background-color: ${({ theme }) => theme.colors.bg} ;
    }
 }
  
}
`;
export default Service;