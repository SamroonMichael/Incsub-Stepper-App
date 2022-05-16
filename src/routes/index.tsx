import React from 'react';
import { Navigate } from 'react-router-dom';
import SignupView from '../views/Signup';
import Success from '../views/Success';

export const routes = [
    {
        index: true,
        name: 'index-page',
        component: <Navigate to="/sign-in" />,
        exact: true,
    },
    {
        path: '/sign-in',
        name: 'account-sign-in',
        component: <SignupView />,
        exact: true,
    },
    {
        path: '/success',
        name: 'success',
        component: <Success />,
        exact: true,
    },
];
