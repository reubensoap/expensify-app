import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/HeaderComponent';
import DashboardPage from '../components/DashboardComponent';
import AddExpensePage from '../components/AddComponent';
import EditExpensePage from '../components/EditComponent';
import HelpExpensePage from '../components/HelpComponent';
import NotFoundPage from '../components/ErrorPageComponent';
import LoginPage from '../components/LoginComponent';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        
    </Router>
);

export default AppRouter;