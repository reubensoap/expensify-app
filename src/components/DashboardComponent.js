import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListHeader from './ExpenseListHeader';

const DashboardPage = () => (
    <div>
        <ExpenseListHeader />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;