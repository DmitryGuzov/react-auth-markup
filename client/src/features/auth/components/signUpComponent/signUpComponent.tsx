import React from "react";

import "./signUpComponent.scss";

import InputComponent from "../inputComponent/InputComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";
import LeftSideComponent from "../leftSideComponent/LeftSideComponent";

const SignUpComponent = (): JSX.Element => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleChangeForm = (evt: any) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };
  React.useEffect(() => {
    return () => {};
  }, [form]);
  return (
    <>
      <div className="signup-wrapper">
        <LeftSideComponent title="Sign Up" text="Don't have an account?">
          <form className="signup-form">
            <InputComponent
              label="Full Name"
              id="name"
              inputName="name"
              inputType="text"
              pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
              placeholder="Ivan Ivanov"
              errors="Some error"
              onChange={handleChangeForm}
            />
            <InputComponent
              label="Your email"
              id="email"
              inputName="email"
              inputType="text"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              placeholder="Enter your email"
              errors="Some error"
              onChange={handleChangeForm}
            />
            <InputComponent
              label="Your password"
              id="password"
              inputName="password"
              inputType="password"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$"
              placeholder="Enter your password"
              errors="Some error"
              onChange={handleChangeForm}
            />
            <InputComponent
              label="Repeat password"
              id="repeat-password"
              inputName="repeatPassword"
              inputType="password"
              pattern={form.password}
              placeholder="Enter your password"
              errors="Some error"
              onChange={handleChangeForm}
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
