import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

import PrivateRoute from './containers/PrivateRoute';

export default props => (
  <Router>
    <Route exact path="/" component={Register} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Router>
);
