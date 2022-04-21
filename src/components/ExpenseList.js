import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListHeader from './ExpenseListHeader';

const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expenses</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense, index) => {
                        return <ExpenseItem key={index} {...expense} />;
                    })
                )
                
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);