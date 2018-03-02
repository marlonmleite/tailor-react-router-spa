import { createStore, compose } from 'redux'

const initState = {
  contacts: []
}

function contact(state = initState, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.contacts }
    default:
      return state
  }
}

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = composeEnhancers()(createStore)

export default store(contact)