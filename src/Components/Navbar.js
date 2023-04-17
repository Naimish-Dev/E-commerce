import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const Navbar=()=>{
    return (
      <Wraper>
        <div className="align_navbar">
          <NavLink to="/">
            <img src="images/logo.png" alt="logo" className="logo" />
          </NavLink>

          <Nav />
        </div>
      </Wraper>
    );




}
const Wraper =styled.header`
position:fixed;
top:0rem;
width:100vw ;
z-index:10000;

.align_navbar{

    font-size:1.5rem ;
    padding:1rem 3rem;
    background-color:${({theme})=>theme.colors.bg} ;
    display:flex ;
    align-items:center ;
    justify-content: space-between;
}



.logo{
    width:20rem;
    background-color:transparent ;
}
`;

export default Navbar;
 