import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import EventCreator from './containers/EventCreator';

import PrivateRoute from './containers/PrivateRoute';

export default props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" PrivateComponent={Dashboard} />
      <PrivateRoute path="/events/create" PrivateComponent={EventCreator} />
    </Switch>
  </Router>
);
