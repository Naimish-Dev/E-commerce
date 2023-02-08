import React from "react";
import styled from "styled-components";


const Tasted = () => {
    return (<Wraper>
        <div className="for_bg">

        <div className="container"> 

        <div className="d-flex">

            <div className="tested_heding">
                <h3>
                Trusted by more then 1000+ Companies
               </h3>
            </div>
            <div className="Bottem_company_logo">
                <div className="C_logo"><img className="logo_self" src="images/user_logo-1.png" alt="user company logo 1"/></div>
                <div className="C_logo"><img className="logo_self" src="images/user_logo-2.png" alt="user company logo 1"/></div>
                <div className="C_logo"><img className="logo_self" src="images/user_logo-3.png" alt="user company logo 1"/></div>
                <div className="C_logo"><img className="logo_self hide" src="images/user_logo-4.png" alt="user company logo 1"/></div>
                <div className="C_logo"><img className="logo_self hide" src="images/user_logo-5.png" alt="user company logo 1"/></div>

            </div>
        </div>
        </div>
</div>
    </Wraper>)

}


const Wraper = styled.section`
color:black;

.d-flex{
    flex-direction:column ;
    padding:3rem 0;
    gap:3rem;


    .tested_heding{
        text-align:center ;
    }
}

.Bottem_company_logo{
    display:flex;
    gap:2rem;
align-items:center ;
justify-content:space-between;

    .logo_self{
        width:10rem;
    }
}

@media(max-width:${({theme})=>theme.media.mobile}){
/* @media(max-width:${({ theme }) => theme.media.mobile}){ */
    .Bottem_company_logo{
        display:flex;
        flex-direction:column ;

       .hide{
    display:none;
    }
    .logo_self{
        width:15rem ;
        margin:3rem 0;
    }
    }
}
`;

export default Tasted;