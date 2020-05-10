import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routeConfig } from './config/routeConfig';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';

export const Routes = (props) => (
    <BrowserRouter>
    <Switch>
        <Route exact path={routeConfig.root} component={Login} />
        <Route path={routeConfig.dashboard} component={Dashboard} />
    </Switch>
    </BrowserRouter>
)