import { createStore, compose } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_CATALOGS':
      return state + 1
    case 'DECREMENT_CATALOGS':
      return state - 1
    default:
      return state
  }
}

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = composeEnhancers()(createStore)

export default store(counter)