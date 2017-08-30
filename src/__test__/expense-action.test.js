import {expenseCreate, expenseUpdate, expenseDelete} from '../action/expense-actions.js';

describe('Expense Actions', () => {
  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let action = expenseCreate({ title: 'test title' });
    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.title).toBe('test title');
  });

  test('expenseDelete returns a EXPENSE_DELETE action', () => {
    let expense = { id: '1234', timestamp: new Date(), title: 'test title' };
    let action = expenseDelete(expense);
    expect(action).toEqual({
      type: 'EXPENSE_DELETE',
      payload: expense
    })
  });

  test('expenseUpdate returns a EXPENSE_UPDATE action', () => {
    let expense = { id: '1234', timestamp: new Date(), title: 'test title' };
    let action = expenseUpdate(expense);
    expect(action).toEqual({
      type: 'EXPENSE_UPDATE',
      payload: expense
    });
  });
});
