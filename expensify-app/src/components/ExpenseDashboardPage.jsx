import React from 'react';
import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from '../components/ExpenseListFilters.jsx';
import ExpensesSummary from './ExpensesSummary.jsx';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
