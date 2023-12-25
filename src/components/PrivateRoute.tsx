import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const PrivateRoute:any = () => {
  const isAuthenticated = useSelector((store: any) => store.auth.isAuthenticated);
  const location = useLocation();
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export default PrivateRoute;