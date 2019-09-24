import React from 'react';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import "./styles/Home.scss";

// This exports the different routes that will be used on the page
export const Routes = () => {
    return (
        <div className={"background"}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
};
