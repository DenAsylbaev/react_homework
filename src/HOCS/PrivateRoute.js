import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ authenticated, ...rest }) {
    return authenticated ? (
        <Route {...rest} />
        ) : (
        <Redirect to='/'/>
        );
}