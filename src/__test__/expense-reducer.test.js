import expenseReducer from '../reducer/expense.js';
import categoryReducer from '../reducer/category.js';

describe('Expense Reducer', () => {
  test('initial state should be an empty object', () => {
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

  test('EXPENSE_CREATE should append a expense to the expenses object', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: {
        id: '123',
        categoryID: 'category',
        title: 'some title',
        price: 'some price',
        timestamp: 'some timestamp'
      }
    }
    var category = []

    let result = expenseReducer({category}, action);
    console.log(result);
    expect(result.category.length).toBe(1);
    expect(result.category[0]).toBe(action.payload);
  });

  test('EXPENSE_UPDATE should replace a expense in the expenses object', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: {
        id: '123',
        categoryID: 'category',
        title: 'some title',
        price: 'some price',
        timestamp: 'some timestamp'
      }
    }
    var category = []

    let firstResult = expenseReducer({category}, action);

    let actionTwo = {
      type: 'EXPENSE_UPDATE',
      payload: {
        id: '123',
        categoryID: 'category',
        title: 'some new title',
        price: 'some new price',
        timestamp: 'some new timestamp'
      }
    }

    let result = expenseReducer(firstResult, actionTwo);
    expect(result.category.length).toBe(1);
    expect(result.category[0]).toBe(actionTwo.payload)
  })

  test('EXPENSE_DELETE should DELETE a expense from the expenses object', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: {
        id: '123',
        categoryID: 'category',
        title: 'some title',
        price: 'some price',
        timestamp: 'some timestamp'
      }
    }
    var category = []

    let firstResult = expenseReducer({category}, action);

    let actionTwo = {
      type: 'EXPENSE_DELETE',
      payload: {
        id: '123',
        categoryID: 'category',
        title: 'some title',
        price: 'some price',
        timestamp: 'some timestamp'
      }
    }

    let result = expenseReducer(firstResult, actionTwo);
    expect(result.category.length).toBe(0);
  })

});
