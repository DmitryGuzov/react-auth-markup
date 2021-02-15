import React from "react";
import { Link } from "react-router-dom";

import "./forgotPasswordComponent.scss";
import pubg from "../../../assets/img/pubg.png";
import fortnite from "../../../assets/img/fortnite.png";
import dota from "../../../assets/img/dota.png";
import cs from "../../../assets/img/cs.png";
import navi from "../../../assets/img/navi.png";

const ForgotPasswordComponent = (): JSX.Element => {
  const [email, setEmail] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(
    "Вы еще ничего не ввели"
  );
  const Errors = (inputType: string, value: string) => {
    if (inputType === "email") {
      let ss = value;

      new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g).test(ss)
        ? setIsValid(true)
        : setIsValid(false);

      if (value.trim().length == 0) {
        setErrorMessage("Вы еще ничего не ввели");
      } else if (!value.includes("@") && !value.includes(".")) {
        setErrorMessage("Не найдено символы @ . ");
      } else if (!value.includes("@")) {
        setErrorMessage("Не найдено символ `@`");
      } else if (!value.includes(".")) {
        setErrorMessage("Не найдено символ `.`");
      } else if (isValid) {
        setErrorMessage("All done");
      }
    }
  };
  const handleEmailChange = (evt: any) => {
    setEmail(evt.target.value);
    Errors("email", evt.target.value);
  };
  React.useEffect(() => {
    console.log(isValid, setIsValid, setEmail);
    return () => {};
  }, [isValid, email]);
  return (
    <>
      <div className="forgot-password-wrapper">
        <div className="left-side">
          <h3 className="title">Forgot Password?</h3>
          <p className="text">
            Enter the email address associated with your account.
          </p>
          <form className="signup-form">
            <label htmlFor="email" className="input">
              Your Email
              <input
                type="text"
                id="email"
                onChange={handleEmailChange}
                placeholder="Enter your email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                required
              />
              <svg
                width="14px"
                height="12px"
                viewBox="0 0 14 12"
                className="check"
              >
                <path d="M1 7 5.5 11 L13 1"></path>
              </svg>
              <svg
                className="invalid-check"
                width="15px"
                height="12px"
                viewBox="0 0 350 350"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#f44336">
                  <path d="m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                  <path d="m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                </g>
              </svg>
              <span className="tooltip">{errorMessage}</span>
            </label>
            <button className="submit">Submit</button>
            <button className="submit2">Sign In</button>
          </form>
        </div>
        <div className="right-side">
          <div className="top-group">
            <h2 className="title">Natus Vincere —</h2>
            <span className="text">Online team management</span>
          </div>

          <div className="animation-block">
            <img className="pubg" src={pubg} alt="" />
            <img className="fortnite" src={fortnite} alt="" />
            <img className="dota" src={dota} alt="" />
            <img className="cs" src={cs} alt="" />
            <img className="navi" src={navi} alt="" />
          </div>
          <p className="link">
            Don't have an account? <Link to="/signup"> Click here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
