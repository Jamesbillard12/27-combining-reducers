import expenseReducer from '../reducer/expense.js';

describe('Expense Reducer', () => {
  test('initial state should be an empty array', () => {
    let result = expenseReducer(undefined, { type: null });
    expect(result).toEqual({});
  });

  test('if no action type is presented, the state should be returned', () => {
    let state = [
      { id: 'someid', title: 'some title' },
      { id: 'anotherid', title: 'another title' }
    ]

    let result = expenseReducer(state, {type: null});
    expect(result).toEqual(state);
  });
});
