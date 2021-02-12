import React from 'react';
// Urls
import { SIGNUP_PAGE_URL, SIGNIN_PAGE_URL } from './urls';
// Components
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { Route } from 'react-router';


export const AuthRoutes = [
  <Route key="signup" path={SIGNUP_PAGE_URL.urlTemplate} component={SignUpPage} />,
  <Route key="signin" path={SIGNIN_PAGE_URL.urlTemplate} component={SignInPage} />,
];
