import categoryReducer from '../reducer/category.js';

describe('Category Reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, { type: null });
    expect(result).toEqual([]);
  });

  test('if no action type is presented, the state should be returned', () => {
    let state = [
      { id: 'someid', title: 'some title' },
      { id: 'anotherid', title: 'another title' }
    ]

    let result = categoryReducer(state, {type: null});
    expect(result).toEqual(state);
  });

  test('CATEGORY_CREATE should append a category to the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '123',
        title: 'some title',
        budget: 'some budget',
        timestamp: 'some timestamp'
      }
    }

    let result = categoryReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });

  test('CATEGORY_UPDATE should replace a category in the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '123',
        title: 'some title',
        budget: 'some budget',
        timestamp: 'some timestamp'
      }
    }

    let firstResult = categoryReducer([], action);

    let actionTwo = {
      type: 'CATEGORY_UPDATE',
      payload: {
        id: '123',
        title: 'some new title',
        budget: 'some new budget',
        timestamp: 'some new timestamp'
      }
    }

    let result = categoryReducer(firstResult, actionTwo);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(actionTwo.payload)
  })

  test('CATEGORY_DELETE should DELETE a category from the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '123',
        title: 'some title',
        budget: 'some budget',
        timestamp: 'some timestamp'
      }
    }

    let firstResult = categoryReducer([], action);

    let actionTwo = {
      type: 'CATEGORY_DELETE',
      payload: {
        id: '123',
        title: 'some title',
        budget: 'some budget',
        timestamp: 'some timestamp'
      }
    }

    let result = categoryReducer(firstResult, actionTwo);
    expect(result.length).toBe(0);
  })

});
