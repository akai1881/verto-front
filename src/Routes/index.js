import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {publicRoutes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} exact={exact} component={Component} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
