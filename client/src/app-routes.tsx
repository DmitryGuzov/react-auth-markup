import React from 'react';
import { Redirect } from 'react-router';
import { AuthRoutes } from './features/auth';

export const AppRoutes = [
  ...AuthRoutes,
    <Redirect key="home-page" from="/" to="/signin" />,
];
