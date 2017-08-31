let validateCategory = (category) => {
  if (!category.id || !category.title || !category.budget || !category.timestamp) {
    throw new Error('VALIDATION_ERROR: category must include id, title, budget, and timestamp')
  }
}

let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'CATEGORY_CREATE':
      validateCategory(payload);
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      validateCategory(payload);
      return state.map(category => category.id === payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      validateCategory(payload);
      return state.filter(category => category.id !== payload.id)
    default:
      return state
  }
}
