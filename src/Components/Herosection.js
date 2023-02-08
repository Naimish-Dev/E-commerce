import styled from "styled-components"
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button"

const Hero = ({data}) => {


    const {header}=data
    return <Wraper>

        <div className="container">
            <div className="d-flex">
                <div className="flex_left">
                    <p className="hero_note">This is a ecommerce website, you cna also shop any thig</p>
                    <h1 className="hero_header" > {header}</h1>
                    <p className="hero_note">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                    <NavLink className="buy-now-btn" to="/products">
                        <Button>Buy Now</Button>
                    </NavLink>
                </div>
                <div className="flex_right">
                 
                        <img className="hero_img" src="images/hero.jpg" alt="Hero post" />
                 
                </div>
            </div>
        </div>



    </Wraper>
}

const Wraper = styled.section`
`;

export default Hero;