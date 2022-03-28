import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            console.log("matches date")
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(sortBy === 'amount'){
            console.log("matches amount")
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Action Generators long type -----------------------------------------------------

const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Action Generators short type ---------------------------------------------------

const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});

// Default Data ------------------------------------------------------------------

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// Reducers  ---------------------------------------------------------------------

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            } 
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
};

// Store Initializer ---------------------------------------------------------------

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    console.log(state.filters)
});

// Dummy Action Calls -------------------------------------------------------------

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }));

const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 500, createdAt: 500 }));

const expenseThree = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 200 }));
/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter("coffee"));

store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

store.dispatch(setEndDate(1500));

store.dispatch(setStartDate(125));

store.dispatch(setStartDate());
*/

store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: 'eeevevere',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};




