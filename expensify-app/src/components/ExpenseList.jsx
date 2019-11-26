import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.jsx';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        expenses.map(({ id, description, amount, createdAt }) => (
          <ExpenseListItem
            key={id}
            id={id}
            description={description}
            amount={amount}
            createdAt={createdAt}
          />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
