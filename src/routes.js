import React from 'react';
import  Home  from './views/Home/Home';
import  NotFound  from './views/NotFound/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import "./styles/Home.scss";

// This exports the different routes that will be used on the page
export const Routes = () => {
    return (
        <div className={"background"}>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
