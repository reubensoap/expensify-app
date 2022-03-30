import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpenseTotals from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseListHeader = (props) => (
    <div>
        <h2>Viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling {numeral(getExpenseTotals(props.expenses) / 10000).format('$0,0.00')}</h2>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }; 
};

export default connect(mapStateToProps)(ExpenseListHeader);