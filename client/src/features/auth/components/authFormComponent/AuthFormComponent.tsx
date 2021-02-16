import React, { useEffect, useState, useCallback } from "react";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import { message } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import * as Yup from "yup";
import { GOOGLE_AUTH } from "../../../../config";
// Styles
import "./AuthFormComponent.scss";
// Models
import { AuthSignInModel, AuthSignUpModel } from "../../models";
import { SIGNIN_PAGE_URL, SIGNUP_PAGE_URL } from "features/auth/urls";

import { GoogleLogin } from "react-google-login";

interface AuthPageProps {
  value: any;
  loading: boolean;
  authSignIn: (signInModel: AuthSignInModel) => void;
  authSignUp: (signUpModel: AuthSignUpModel) => void;
  googleAuth: (googleAuthModel: any) => void;
  status: string;
  isSignin: string; 
}
const authSignInValidation = Yup.object<AuthSignInModel>({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
const authSignUpValidation = Yup.object<AuthSignUpModel>({
  email: Yup.string().required(),
  password: Yup.string().required(),
  username: Yup.string(),
});

enum StatusViewAuth {
  SignIn = "Sign In",
  SignUp = "Sign Up",
}
enum LoadingStatusAuth {
  success = "success",
  error = "error",
}
enum StatusType {
  text = "text",
  password = "password",
}
export function AuthFormComponent({
  value,
  loading,
  authSignUp,
  authSignIn,
  googleAuth,
  status,
  isSignin,
}: AuthPageProps): JSX.Element {
  const [type, setType] = useState("password");
  const [check, setCheck] = useState(false);
  const handleSignInSubmit = useCallback(
    (signInModel: AuthSignInModel) => {
      authSignIn(signInModel);
      setCheck(!check);
    },
    [authSignIn]
  );

  const handleSignIn = useCallback(
    (googleData: any) => {
      googleAuth(googleData);
      setCheck(!check);
    },
    [googleAuth]
  );
  const handleSignInCalcel = () => {
    console.log("Google Sign In canceled");
  };
  const handleSignUpSubmit = useCallback(
    (signUpModel: AuthSignUpModel) => {
      authSignUp(signUpModel);
      setCheck(!check);
    },
    [authSignUp]
  );
 
  const signInError = () => {
    message.error("Incorrect email or password");
  };
  const signInSuccess = () => {
    message.success("Success sign in");
  };
  const signUpError = () => {
    message.error(
      `User with this email was created, or you wrote incorrect email please, check this fields.`
    );
  };
  const signUpSuccess = () => {
    message.success("User was created success");
  };
  useEffect(() => {
    if (status === StatusViewAuth.SignIn && check === true) {
      if (isSignin == LoadingStatusAuth.success) {
        signInSuccess();
      } else if (isSignin == LoadingStatusAuth.error) {
        signInError();
      }
    }
    if (status === StatusViewAuth.SignUp && check === true) {
      if (isSignin == LoadingStatusAuth.success) {
        signUpSuccess();
      } else if (isSignin == LoadingStatusAuth.error) {
        signUpError();
      }
    }
    return () => {};
  }, [value, isSignin]);
  return (
    <Formik
      initialValues={value}
      onSubmit={
        status === StatusViewAuth.SignUp
          ? handleSignUpSubmit
          : handleSignInSubmit
      }
      layout="vertical"
      validationSchema={
        status === StatusViewAuth.SignUp
          ? authSignUpValidation
          : status === StatusViewAuth.SignIn
          ? authSignInValidation
          : null
      }
    >
      <div className="login-page">
        <div className="form">
          <h2>{status}</h2>
          {status === StatusViewAuth.SignUp ? (
            <Form className="register-form" autoComplete="off">
              <Input
                name="username"
                type="text"
                placeholder="Username"
                required
              ></Input>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
              ></Input>
              <label htmlFor="password">
                <Input
                  name="password"
                  type={type}
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                ></Input>
                <span
                  onClick={() => {
                    type === StatusType.text
                      ? setType(StatusType.password)
                      : setType(StatusType.text);
                  }}
                >
                  {type === "text" ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </span>
              </label>
              <Button htmlType="submit" loading={loading}>
                {status}
              </Button>

              <p className="message">
                Already registered?{" "}
                <Link to={SIGNIN_PAGE_URL.urlTemplate}>Sign In</Link>
              </p>
            </Form>
          ) : status === StatusViewAuth.SignIn ? (
            <Form className="login-form">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
              ></Input>
              <label htmlFor="password">
                <Input
                  name="password"
                  type={type}
                  placeholder="Password"
                  required
                ></Input>
                <span
                  onClick={() => {
                    type === "text" ? setType("password") : setType("text");
                  }}
                >
                  {type === "text" ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </span>
              </label>
              <GoogleLogin
                // clientId="931814106618-8l2mtdlq28776fsmfjmo1hiop127fm3q.apps.googleusercontent.com"
                clientId={GOOGLE_AUTH}
                buttonText="Google"
                onSuccess={handleSignIn}
                onFailure={handleSignInCalcel}
                cookiePolicy={"single_host_origin"}
                style={{ textAlign: "center" }}
              />
              <Button htmlType="submit" loading={loading}>
                {status}
              </Button>
              <p className="message">
                Not registered?
                <Link to={SIGNUP_PAGE_URL.urlTemplate}>Sign Up</Link>
              </p>
            </Form>
          ) : null}
        </div>
      </div>
    </Formik>
  );
}
