import React from "react";

import "./forgotPasswordComponent.scss";

import InputComponent from "../inputComponent/InputComponent";
import LeftSideComponent from "../leftSideComponent/LeftSideComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";

import useForm from "../../../../shared/useForm";
import { forgotPasswordValidate } from "../../../../shared/AuthFormValidationRules";

const ForgotPasswordComponent = (): JSX.Element => {
  function forgotPassword() {
    alert("No errors, submit callback called!");
  }
  const { values, errors, handleChange, handleSubmit } = useForm(
    forgotPassword,
    forgotPasswordValidate
  );

  React.useEffect(() => {
    return () => {};
  }, [errors, values]);
  return (
    <>
      <div className="forgot-password-wrapper">
        <LeftSideComponent
          title="Forgot Password?"
          text=" Enter the email address associated with your account."
        >
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
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
            <button className="submit">Submit</button>
            <button className="submit2">Sign In</button>
          </form>
        </LeftSideComponent>
        <RightSideComponent link="/signup" />
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
