import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Contacts from './Contacts'

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/contacts" component={Contacts}/>
        <Route path="*" component={null}/>
      </Route>
    </Router>
  </Provider>
)

export default Routes