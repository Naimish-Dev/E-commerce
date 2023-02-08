import styled from "styled-components";
import { Button } from "../styles/Button"
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"
const Footer = () => {
    return (<>

        <Wraper>
            <div className="footer_container">
                <footer className="container">
                    <div className="sub_footer d-flex">
                        <div className="starting ">
                            <h3> E-commerce Website</h3>
                            <p> By using this website you fully setify your shoping wish</p> </div>
                        <div className="ending">
                            <Button className="sub_footer_button"> submit now</Button> </div>
                    </div>
                    <div className="main_footer">
                        <div className="allpart_of_footer">
                            <div className="part">
                                <h3> E-commerce Website</h3>
                                <p>  this website is fully setify your shoping wish</p>
                            </div>
                            <div className="part">
                                <h3> Subscribe to ouv E-busigness</h3>
                                <form>
                                    <input type="email" placeholder="Enter your Emain" />
                                    <input type="submit" value="submit" />
                                </form>

                            </div>
                            <div className="part">
                                    <h3> Connect with us</h3>
                                <div className="arang_icon"> 
                                <div className="social-icon">
                                    <a href="google.com" target="_a">
                                        
                                    <FaDiscord className="icon" />
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="google.com" target='_a'>
                                    <FaInstagram className="icon" />
                                        </a>
                                </div>
                                <div className="social-icon">
                                    <a href="youtub.com" target="_blanks">
                                        <FaYoutube className="icon" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="part">
                                <h3> content Uc</h3>
                                <h3 className="contact_NO"> +91 7285857781</h3>
                            </div>
                        </div>
                        <div className="bottem_part_footer">
                        <hr />
                            <div className=" copiright"> <p>@{new Date().getFullYear()}Coppaywright</p>
                            <p> Created BY Naimish</p></div>
                        </div>
                    </div>

                </footer>

            </div>

        </Wraper>
    </>
    )
}
const Wraper = styled.section`
.footer_container{
    position:relative;
    background-color:#FB7208;

 h3{
        padding :1rem 0 ;
    }
form{
    display:flex ;
    flex-direction:column ;
    align-items:center;
    input{
        margin:1rem;
        padding:1rem;
    }
}
    .sub_footer{
        width: auto;
        background-color:${({ theme }) => theme.colors.bg} ;
        margin:12.5rem auto 0 auto;
        align-items:center ;
        border-radius:1rem ;
        justify-content:space-between ;
        position: relative;
        top:-7.5rem;


        .starting , .ending{
            margin:3rem;
    }

    }

    .main_footer{
        .allpart_of_footer{
            display:flex ;
            flex-wrap: wrap;
            justify-content:center ;
            align-items:center ;
            align-items:flex-start;
        }
        .part{
            margin: 3rem;
        }
        .arang_icon{
            display:flex;
        }
        .contact_NO{
            color:white;
            font-weight:600 ;
        }
    }

    a{
        color: black;
    }
    .icon{
        font-size:3rem ;
        background-color:white ;
        padding:5px;
        margin: 0 1rem;
        border-radius:50% ;
    }

    .copiright{
        display:flex ;
        justify-content:space-around ;
        padding:2rem 0;
        color:white ;
        font-weight:600;
    }
}
`;


export default Footer;