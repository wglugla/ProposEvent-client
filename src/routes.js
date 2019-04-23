import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import EventCreator from './containers/EventCreator';
import Event from './containers/Event';
import EventSearch from './containers/EventSearch';

import PrivateRoute from './containers/PrivateRoute';

export default props => (
  <Switch>
    <Route exact path="/" component={Register} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/dashboard" PrivateComponent={Dashboard} />
    <PrivateRoute path="/events/create" PrivateComponent={EventCreator} />
    <PrivateRoute path="/events/:id" PrivateComponent={Event} />
    <PrivateRoute path="/events" PrivateComponent={EventSearch} />
  </Switch>
);
