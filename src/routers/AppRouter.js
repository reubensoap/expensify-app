import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/HeaderComponent';
import DashboardPage from '../components/DashboardComponent';
import AddExpensePage from '../components/AddComponent';
import EditExpensePage from '../components/EditComponent';
import HelpExpensePage from '../components/HelpComponent';
import NotFoundPage from '../components/ErrorPageComponent';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        
    </BrowserRouter>
);

export default AppRouter;