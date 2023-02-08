import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <Wraper>
      <div className="container">
        <div className="error">
          <div>
            {" "}
            <h1>404</h1>
            <h2> OPPOS Your Loss !!!...</h2>
          </div>
          <div>
            <p>
              the page you are lookin is not exited. How you get heare is a
              mstery. But you can Click the button below to go back to the home
            </p>
          </div>
          <div>
            {" "}
            <NavLink to="/">
              <Button>Home</Button>
            </NavLink>{" "}
          </div>
        </div>
      </div>
    </Wraper>
  );
};
const Wraper = styled.section`
  .error {
    text-align: center;
    margin: 10rem;
  }

  div {
    margin: 1rem;
    h1 {
      font-size: 5rem;
      color: #fb7208;
    }
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export default Error;
