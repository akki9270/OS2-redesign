import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';
import PrivateRoute from './components/PrivateRoute';
import Contracts from './pages/Contracts';
import RiskIdentification from './pages/RiskIdentification';
import RiskAssessment from './pages/RiskAssessment';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((store: any) => store.auth.isAuthenticated);
  return (
    <Router>
      {isAuthenticated &&
        <React.Fragment>
          <Topbar />
          <Sidebar />
        </React.Fragment>
      }
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={() => {
            return (
              isAuthenticated ?
                <Redirect to="/projects" /> :
                <Redirect to="/login" />
            )
          }}
        />
        <PrivateRoute exact path="/projects" component={Projects} />
        <PrivateRoute exact path="/contracts" component={Contracts} />
        <PrivateRoute exact path="/riskidentification" component={RiskIdentification} />
        <PrivateRoute exact path="/riskassessment" component={RiskAssessment} />
      </Switch>
    </Router>
  );
}

export default App;
