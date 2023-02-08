import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavagation=({title})=>{

    return(<Wraper>
        <div className="page_Navagation">
    <NavLink to="/"> Home</NavLink> / {title}
            </div>
    
    </Wraper>)
}


const Wraper=styled.section`
padding:7rem 0 ;

.page_Navagation{

    height:4rem;
    padding-left:3rem ;
    width:100vw;
    background-color: ${({theme})=>theme.colors.bg};
    display:flex ;
    justify-content:flex-start ;
align-items:center ;
font-size:1.5rem ;
margin:0 ;
margin-top:2px ;
font-weight:600;
}
`;


export default PageNavagation;