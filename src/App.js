import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import getExpenseTotals from './selectors/expenses-total';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPageComponent';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('test'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('test'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
    });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});