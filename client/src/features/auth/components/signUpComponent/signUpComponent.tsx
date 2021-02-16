import React from "react";

import "./signUpComponent.scss";

import InputComponent from "../inputComponent/InputComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";
import LeftSideComponent from "../leftSideComponent/LeftSideComponent";

const SignUpComponent = (): JSX.Element => {
  const [password, setPassword] = React.useState("");
  return (
    <>
      <div className="signup-wrapper">
        <LeftSideComponent title="Sign Up" text="Don't have an account?">
          <form className="signup-form">
            <InputComponent
              label="Full Name"
              id="name"
              inputType="text"
              pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
              placeholder="Ivan Ivanov"
              errors="Some error"
            />
            <InputComponent
              label="Your email"
              id="email"
              inputType="text"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              placeholder="Enter your email"
              errors="Some error"
            />
            <InputComponent
              label="Your password"
              id="password"
              inputType="password"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$"
              placeholder="Enter your password"
              errors="Some error"
              onChange={(evt: any) => setPassword(evt.target.value)}
            />
            <InputComponent
              label="Repeat password"
              id="repeat-password"
              inputType="password"
              pattern={password}
              placeholder="Enter your password"
              errors="Some error"
            />
            <button className="submit">Sign Up</button>
          </form>
        </LeftSideComponent>
        <RightSideComponent link="/signin" />
      </div>
    </>
  );
};

export default SignUpComponent;
