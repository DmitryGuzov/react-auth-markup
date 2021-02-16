import React from 'react';
// Urls
import { SIGNUP_PAGE_URL, SIGNIN_PAGE_URL } from './urls';
// Components
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { Route } from 'react-router';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ErrorPage } from 'shared/ErrorPages/ErrorPage';


export const AuthRoutes = [
  <Route key="signup" path={SIGNUP_PAGE_URL.urlTemplate} component={SignUpPage} />,
  <Route key="signin" path={SIGNIN_PAGE_URL.urlTemplate} component={SignInPage} />,
  <Route key="forgot-password" path='/forgot-password' component={ForgotPasswordPage} />,
  <Route key="error-page" component={ErrorPage}/>
];
