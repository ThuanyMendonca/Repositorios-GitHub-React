import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Login from './components/Login';
import AppRoutes from './AppRoutes';

import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({
    username: store.getState().username,
  });
});

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={AppRoutes} />
      </Switch>
    </Provider>
  );
}

export default App;
