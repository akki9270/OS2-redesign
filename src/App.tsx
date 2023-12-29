import React, { useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';

import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';
import Contracts from './pages/Contracts';
import RiskIdentification from './pages/RiskIdentification';
import RiskAssessment from './pages/RiskAssessment';
import Login from './pages/Login';

import AuthVerify from './common/AuthVerify';
import { AUTH_ACTIONS } from './store/auth';

const App: React.FC = () => {
  const isAuthenticated = useSelector((store: any) => store.auth.auth?.value);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    if (isAuthenticated) {
      dispatch({ type: AUTH_ACTIONS.LOGOUT_USER });
    }
  }, [dispatch]);

  return (
    <div>
      {isAuthenticated &&
        <React.Fragment>
          <Topbar />
          <Sidebar />
        </React.Fragment>
      }
      <Routes>
        <Route path='/'
          element={isAuthenticated
            ? <Navigate to="/projects" replace />
            : <Navigate to="/login" replace />} />
        <Route path="/projects" element={<PrivateRoute />}>
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/contracts" element={<PrivateRoute />}>
          <Route path="/contracts" element={<Contracts />} />
        </Route>
        <Route path="/riskidentification" element={<PrivateRoute />}>
          <Route path="/riskidentification" element={<RiskIdentification />} />
        </Route>
        <Route path="/riskassessment" element={<PrivateRoute />}>
          <Route path="/riskassessment" element={<RiskAssessment />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <AuthVerify logOut={logOut} />
    </div>
  );
}

export default App;
