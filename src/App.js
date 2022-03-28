import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: "Water bill", note: "bill for January", amount: 125, createdAt: 4000}));

store.dispatch(addExpense({description: "Gas bill", note: "bill for January", amount: 52, createdAt: 4100}));

store.dispatch(addExpense({description: "Rent", note: "bill for January", amount: 700, createdAt: 5100}));

store.dispatch(setTextFilter("water"));

const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('test'));