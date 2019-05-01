import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import EventCreator from './containers/EventCreator';
import Event from './containers/Event';
import EventSearch from './containers/EventSearch';
import EventModifier from './containers/EventModifier';

import PrivateRoute from './containers/PrivateRoute';

export default () => (
  <Switch>
    <Route exact path="/" component={Register} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/dashboard" PrivateComponent={Dashboard} />
    <PrivateRoute exact path="/events" PrivateComponent={EventSearch} />
    <PrivateRoute exact path="/events/create" PrivateComponent={EventCreator} />
    <PrivateRoute exact path="/events/:id" PrivateComponent={Event} />
    <PrivateRoute exact path="/events/:id/modify" PrivateComponent={EventModifier} />
  </Switch>
);
