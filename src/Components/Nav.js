import { NavLink } from "react-router-dom"
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { useCardContext } from "../context/AddtoCartContext";

const Nav = () => {
    const { cartItems } = useCardContext()
    const [menu, setmenu] = useState(true)
    
    return (
      <Wraper>
        <ul className={menu ? "full-screen Both " : "Both isactive"}>
          <li>
            <NavLink to="/" className="link" onClick={() => setmenu(true)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link" onClick={() => setmenu(true)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="link"
              onClick={() => setmenu(true)}
            >
              Contect
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="link"
              onClick={() => setmenu(true)}
            >
              Product
            </NavLink>
          </li>
         
          <li className="set_card_quentity">
            <NavLink
              to="/cart"
              className="link cart"
              onClick={() => setmenu(true)}
            >
              <FiShoppingCart />
              <span>{cartItems}</span>
            </NavLink>
          </li>
        </ul>

        <div>
          <CgMenu
            name="manu_outline"
            className=" responsive_btn open_btn "
            onClick={() => setmenu(false)}
          />
          <CgClose
            name="close_outline"
            className={menu ? "responsive_btn" : "close_btn"}
            onClick={() => setmenu(true)}
          />
        </div>
      </Wraper>
    );
}

const Wraper = styled.header`
  .full-screen {
    display: flex;
    gap: 0.5rem;
    margin: 0px;
  }

  .set_card_quentity {
    margin: 0;
    padding: 0;
  }
  .Both {
    .link {
      padding: 1rem;
      line-height: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.footer_bg};
      border-radius: 5px;
      &:hover {
        background-color: white;
      }
      &:focus {
        color: black;
      }
    }
    .cart {
      position: relative;
      font-size: 2.3rem;
      margin: 0;
    }
    span {
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      line-height: 1.8rem;
      text-align: center;
      background-color: #fb7208;
      border-radius: 50%;
      font-size: 1rem;
      position: absolute;
      top: 5px;
      right: 3px;
    }
  }

  .responsive_btn,
  .close_btn {
    cursor: pointer;
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .full-screen {
      display: none;
    }
    .isactive {
      padding: 10rem 2rem;
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;

      li {
        margin: 10px;
      }
    }
    .close_btn {
      z-index: 9999;
      display: flex;
      position: absolute;
      top: 3rem;
      right: 3rem;
      font-size: 3rem;
      background-color: white;
    }

    .open_btn {
      display: inline-block;
      width: 100%;
      text-align: end;
      font-size: 3rem;

      .closebtn {
        display: null;
      }
    }
  }
`;

export default Nav;