import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';

const Routes = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  </Fragment>
);

export default Routes;
