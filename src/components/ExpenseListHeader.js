import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom';
import getExpenseTotals from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseListHeader = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> 
            {props.expenses.length === 1 ? ' expense ' : ' expenses '} totalling  
            <span> {numeral(getExpenseTotals(props.expenses)).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link to="/create" className="button">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }; 
};

export default connect(mapStateToProps)(ExpenseListHeader);