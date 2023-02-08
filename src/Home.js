import React from "react"
import Service from "./Components/Service"
import Tested from "./Components/Tested"
import HomePageProduct from "./Components/HomePageProduct"


import Hero from "./Components/Herosection"
import styled from "styled-components"
const Home = () => {
    const data = {
        header: "This is E-commerce plateform",
    }
    return (
        <Wraper>
            <Hero data={data} />
            <HomePageProduct/>
            <Service />
            <Tested />
        </Wraper>
    )

}

const Wraper = styled.section`
padding-top:8rem ;

`

export default Home;