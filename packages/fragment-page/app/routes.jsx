import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Header from './Header'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="*" component={Header}/>
  </Router>
)

export default Routes