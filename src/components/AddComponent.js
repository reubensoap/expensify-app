import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

class AddExpensePage extends React.Component {

    render() {
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={(expense) => { this.props.startAddExpense(expense); this.props.history.push('/'); }}/>
                </div>
            </div>
        );
    }
    
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);