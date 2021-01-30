import React from 'react';
import { Route } from "react-router-dom";

import UserProvider from '../../../Context/User';

export default function PrivateRoute({ children, path }) {
    return (
        <UserProvider>
            <Route path={path}>{ children }</Route>
        </UserProvider>
    )
}