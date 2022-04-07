import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                console.log(expense);
                props.startEditExpense(props.expense.id, expense);
                props.history.push('/');
            }}
            />
            <button onClick={() => { props.startRemoveExpense({id: props.expense.id}); props.history.push('/'); console.log(props.match.params.id) }}>Remove</button>
        </div>
    );
    
};

const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id,expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);