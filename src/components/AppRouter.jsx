import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/about" component={AboutUs}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/error" component={Error}/>
            <Redirect to="/error"/>
        </Switch>
    );
};

export default AppRouter;