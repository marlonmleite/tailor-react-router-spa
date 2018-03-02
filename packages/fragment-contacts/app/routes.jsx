import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Contacts from './Contacts'

const Routes = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/contacts" component={Contacts}/>
        <Route path="*" component={null}/>
      </Route>
    </Router>
  </div>
)

export default Routes