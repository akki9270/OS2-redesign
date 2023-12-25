import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((store:any) => store.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render = {(props) => 
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );  
};

export default PrivateRoute;