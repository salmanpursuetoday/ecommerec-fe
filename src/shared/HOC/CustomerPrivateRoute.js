import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserComtext from '../../utils/userContext/context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserComtext);
  const token = localStorage.getItem("auth_token");
  return <Route {...rest} component={(props) => {
    return token && user.role === 'customer' ? <Component {...props} /> : <Redirect to={'/login'} />
  }} />
}

export default PrivateRoute;