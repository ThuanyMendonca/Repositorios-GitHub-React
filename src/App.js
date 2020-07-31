import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={AppRoutes} />
    </Switch>
  );
}

export default App;
