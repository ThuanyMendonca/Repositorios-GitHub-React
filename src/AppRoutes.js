import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import Pesquisar from './components/Pesquisar';
import Repositorio from './components/Repositorios';
import Menu from './components/Menu';

const AppRoutes = ({ username }) => {
  const history = useHistory();

  if (!username) history.push('/login');

  return (
    <Menu>
      <Switch>
        <Route path="/app/pesquisar" component={Pesquisar} />
        <Route path="/app/repositorios/:userName" component={Repositorio} />
      </Switch>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
