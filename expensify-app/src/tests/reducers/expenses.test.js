import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add new expense', () => {
    const expense = {
        id: '123abc',
        description: 'Rent',
        note: 'Something',
        amount: 150,
        createdAt: 1000
    };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    });
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '2' };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '' };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
    const updates = {
        description: 'Coffe',
        note: '',
        amount: 15,
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({...expenses[0],...updates});
});

test('should not edit expense if id not found', () => {
    const updates = {
        description: 'Coffe',
        note: '',
        amount: 15,
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-3',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});