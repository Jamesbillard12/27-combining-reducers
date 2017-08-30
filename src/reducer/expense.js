let validateCategory = (category) => {
  if (!category.id || !category.title || !category.budget || !category.timestamp) {
    throw new Error('VALIDATION_ERROR: category must include id, title, budget, and timestamp')
  }
}

let validateExpense = (expense) => {
  if (!expense.id || !expense.title || !expense.price || !expense.timestamp || !expense.categoryID) {
    throw new Error('VALIDATION_ERROR: expense must include id, categoryID, title, budget, and timestamp')
  }
}


let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpense;

  switch (type) {
    case 'CATEGORY_CREATE':
      validateCategory(payload);
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      validateCategory(payload);
      return {...state, [payload.id] : undefined};
    case 'EXPENSE_CREATE':
      validateExpense(payload);
      categoryID = payload.categoryID;
      categoryExpense = state[categoryID];
      return {...state, [categoryID]: [...categoryExpense, payload]}

    case 'EXPENSE_UPDATE':
      validateExpense(payload);
      categoryID = payload.categoryID;
      categoryExpense = state[categoryID];
      return {...state, [categoryID]: categoryExpense.map(expense => expense.id === payload.id ? payload : expense)}

    case 'EXPENSE_DELETE':
      validateExpense(payload);
      categoryID = payload.categoryID;
      categoryExpense = state[categoryID];
    return {...state, [categoryID]: categoryExpense.filter(expense => expense.id !== payload.id)}

    default:
      return state;
  }
}
