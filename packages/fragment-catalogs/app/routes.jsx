import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Catalogs from './Catalogs'

const Routes = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/catalogs" component={Catalogs}/>
        <Route path="*" component={null}/>
      </Route>
    </Router>
  </div>
)

export default Routes