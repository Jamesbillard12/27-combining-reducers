let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      return {...state, [payload.id] : undefined};
    case 'EXPENSE_CREATE': {
      console.log(payload);
      let {categoryID} = payload;
      let categoryCards = state[categoryID];
      return {...state, [categoryID]: [...categoryCards, payload]}
    }
    case 'EXPENSE_UPDATE': {
      let {categoryID} = payload;
      let categoryCards = state[categoryID];
      return {...state, [categoryID]: categoryCards.map(expense => expense.id === payload.id ? payload : expense)}
    }
    case 'EXPENSE_DELETE': {
      let {categoryID} = payload;
      let categoryCards = state[categoryID];
    return {...state, [categoryID]: categoryCards.filter(expense => expense.id !== payload.id)}
    }
    default:
      return state;
  }
}
