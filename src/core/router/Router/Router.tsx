import React, { createElement } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AuthLayout } from '../../../components/layouts/AuthLayout';
import { MainLayout } from '../../../components/layouts/MainLayout';
import { AUTH, MAIN } from '../../constants/routes';
import { IRoute } from '../../interfaces/IRoute';

interface IRouterProps {
  routes: IRoute[];
  auth: boolean;
}

const Router: React.FC<IRouterProps> = ({ routes, auth }) => (
  <Switch>
    <Route
      key={AUTH}
      path={AUTH}
      render={() => createElement(AuthLayout, null)}
    />
    {!auth && <Redirect to={AUTH} />}
    {routes.map(
      (route: IRoute) =>
        route.path !== AUTH && (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            render={() => createElement(MainLayout, null, <route.component />)}
          />
        )
    )}
    <Redirect to={MAIN} />
  </Switch>
);

export default Router;
