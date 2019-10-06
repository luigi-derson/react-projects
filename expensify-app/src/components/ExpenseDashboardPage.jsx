import React from 'react';
import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from '../components/ExpenseListFilters.jsx';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;