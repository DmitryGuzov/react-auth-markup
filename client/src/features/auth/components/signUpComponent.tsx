import React from "react";
import { Link } from "react-router-dom";

import "./signUpComponent.scss";
import pubg from "../../../assets/img/pubg.png";
import fortnite from "../../../assets/img/fortnite.png";
import dota from "../../../assets/img/dota.png";
import cs from "../../../assets/img/cs.png";
import navi from "../../../assets/img/navi.png";

const SignInComponent = (): JSX.Element => {
  return (
    <>
      <div className="signup-wrapper">
        <div className="left-side">
          <h3 className="title">Sign Up</h3>
          <p className="text">Welcome, we missed you!</p>
          <form className="signin-form">
            <label htmlFor="email" className="input">
              Your Email
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                pattern="\w{1,10}"
                required
              />
              <svg
                width="100%"
                height="18px"
                viewBox="0 0 280 10"
                className="border"
              >
                <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
              </svg>
              <svg
                width="14px"
                height="12px"
                viewBox="0 0 14 12"
                className="check"
              >
                <path d="M1 7 5.5 11 L13 1"></path>
              </svg>
            </label>
            <label htmlFor="password" className="input">
              Password
              <input
                type="text"
                id="password"
                placeholder="Enter your password"
                pattern="\w{6,10}"
                required
              />
              <svg
                width="100%"
                height="20px"
                viewBox="0 0 280 10"
                className="border"
              >
                <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
              </svg>
              <svg
                width="14px"
                height="12px"
                viewBox="0 0 14 12"
                className="check"
              >
                <path d="M1 7 5.5 11 L13 1"></path>
              </svg>
            </label>
            <div className="remebmer-group">
              <div className="checkbox">
                <input
                  className="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <label htmlFor="styled-checkbox-1">Remember me</label>
              </div>
              <a href="#">Forgot Password?</a>
            </div>
            <button className="submit">Sign In</button>
          </form>
          <div  className="continue-border">
          <p>or continue with</p>
          </div>
          <div className="button-group">
            <button className="steam">
              <span></span> Sign in with Steam
            </button>
            <button className="vk">
              <span></span>
            </button>
          </div>
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
            Don't have an account? <Link to="/signin"> Click here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInComponent;
