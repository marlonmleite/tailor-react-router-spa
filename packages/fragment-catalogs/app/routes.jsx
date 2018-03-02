import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Catalogs from './Catalogs'

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/catalogs" component={Catalogs}/>
        <Route path="*" component={null}/>
      </Route>
    </Router>
  </Provider>
)

export default Routes
