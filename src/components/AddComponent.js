import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

class AddExpensePage extends React.Component {

    render() {
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={(expense) => { this.props.startAddExpense(expense); this.props.history.push('/'); }}/>
            </div>
        );
    }
    
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);