import React from "react"
import styled from "styled-components";
import Hero from "./Components/Herosection";
const About=()=>{
const data={
    header:"This is about of E-commerce",
}

    return <Wraper>     
    <Hero data={data}/>
    </Wraper>
}

const Wraper=styled.section`
padding-top:8rem ;


`;

export default About;