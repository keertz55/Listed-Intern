import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./login";
import Dashboard from "./dashboard";

const Routers = () => {
    return (
        <BrowserRouter>
                <Route exact path='/' component={Login} />
                <Route path="/dashboard" component={Dashboard} />
        </BrowserRouter>
    )
};

export default Routers;