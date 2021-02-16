import React from "react";

import "./signUpComponent.scss";

import InputComponent from "../inputComponent/InputComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";
import LeftSideComponent from "../leftSideComponent/LeftSideComponent";
import useForm from "shared/useForm";
import { signupValidate } from "shared/AuthFormValidationRules";

const SignUpComponent = (): JSX.Element => {
  function signUp() {
    alert("No errors, submit callback called!");
  }
  const { values, errors, handleChange, handleSubmit } = useForm(
    signUp,
    signupValidate
  );
  React.useEffect(() => {
    return () => {};
  }, [errors, values]);
  return (
    <>
      <div className="signup-wrapper">
        <LeftSideComponent title="Sign Up" text="Don't have an account?">
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <InputComponent
              label="Full Name"
              id="name"
              inputName="name"
              inputType="text"
              pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
              placeholder="Ivan Ivanov"
              errors={errors.name || ""}
              onChange={handleChange}
              value={values.name || ""}
            />
            <InputComponent
              label="Your email"
              id="email"
              inputName="email"
              inputType="text"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              placeholder="Enter your email"
              errors={errors.email || ""}
              onChange={handleChange}
              value={values.email || ""}
            />
            <InputComponent
              label="Your password"
              id="password"
              inputName="password"
              inputType="password"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{8,20})$"
              placeholder="Enter your password"
              errors={errors.password || ""}
              onChange={handleChange}
              value={values.password || ""}
            />
            <InputComponent
              label="Repeat password"
              id="repeat-password"
              inputName="repeatPassword"
              inputType="password"
              pattern={values.password || ""}
              placeholder="Enter your password"
              errors={errors.repeatPassword || ""}
              onChange={handleChange}
              value={values.repeatPassword || ""}
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
