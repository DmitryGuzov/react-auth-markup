import React from "react";

import "./forgotPasswordComponent.scss";

import InputComponent from "../inputComponent/InputComponent";
import LeftSideComponent from "../leftSideComponent/LeftSideComponent";
import RightSideComponent from "../rightSideComponent/RightSideComponent";

const ForgotPasswordComponent = (): JSX.Element => {
  const [form, setForm] = React.useState({ email: "" });
  // const [isValid, setIsValid] = React.useState(false);
  // const [errorMessage, setErrorMessage] = React.useState(
  //   "Вы еще ничего не ввели"
  // );
  // const Errors = (inputType: string, value: string) => {
  //   if (inputType === "email") {
  //     let ss = value;

  //     new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g).test(ss)
  //       ? setIsValid(true)
  //       : setIsValid(false);

  //     if (value.trim().length == 0) {
  //       setErrorMessage("Вы еще ничего не ввели");
  //     } else if (!value.includes("@") && !value.includes(".")) {
  //       setErrorMessage("Не найдено символы @ . ");
  //     } else if (!value.includes("@")) {
  //       setErrorMessage("Не найдено символ `@`");
  //     } else if (!value.includes(".")) {
  //       setErrorMessage("Не найдено символ `.`");
  //     } else if (isValid) {
  //       setErrorMessage("All done");
  //     }
  //   }
  // };
  const handleChangeForm = (evt: any) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
    // Errors("email", evt.target.value);
  };
  React.useEffect(() => {
    console.log(form);
    return () => {};
  }, [form]);
  return (
    <>
      <div className="forgot-password-wrapper">
        <LeftSideComponent
          title="Forgot Password?"
          text=" Enter the email address associated with your account."
        >
          <form className="signup-form">
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
