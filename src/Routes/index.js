import HomePage from 'pages/Home/HomePage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {publicRoutes.map(({ path, Component, exact }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => {
              const crumbs = publicRoutes
                .filter(({ path }) => props.match.path.includes(path))
                .map(({ path, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                        (path, param) => path.replace(`:${param}`, props.match.params[param]),
                        path
                      )
                    : path,
                  ...rest,
                }));

              return <Component {...props} />;
            }}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
