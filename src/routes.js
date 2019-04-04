import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';

export default props => (
  <Router>
    <Route exact path="/" component={Register} />
    <Route path="/login" component={Login} />
  </Router>
);
