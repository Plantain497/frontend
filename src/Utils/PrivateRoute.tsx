import React from 'react';
// @ts-ignore
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../Components/Auth';

export interface IPrivateRouteProps extends RouteProps {
  path: string;
  element: any;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = props => {
  const auth = useAuth();

  if (auth.token === undefined) {
    return <Navigate to='/' replace />;
  } else {
    return <Route {...props} />;
  }
};

export { PrivateRoute };
