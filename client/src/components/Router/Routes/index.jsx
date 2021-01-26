import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from '../PrivateRoute/';

// Public routes.
import Home from "../../../views/Home";
import Guide from "../../../views/Guide";
import Login from "../../../views/Login";

// Private routes.
import Dashboard from "../../../views/Dashboard";
import Callroom from "../../../views/Callroom";

// Error routes.
import NotFound from "../../../views/Errors/NotFound";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">{ Home }</Route>
                <Route path="/guide">{ Guide }</Route>
                <Route path="/login">{ Login }</Route>

                <PrivateRoute path="/dashboard">{ Dashboard }</PrivateRoute>
                <PrivateRoute path="/callroom">{ Callroom }</PrivateRoute>

                <Route>{ NotFound }</Route>
            </Switch>
        </Router>
    );
}