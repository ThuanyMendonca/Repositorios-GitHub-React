import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pesquisar from './components/Pesquisar';
import Repositorio from './components/Repositorios';
import Menu from './components/Menu';

const AppRoutes = () => {
  return (
    <Menu>
      <Switch>
        <Route path="/app/pesquisar" component={Pesquisar} />
        <Route path="/app/repositorios/:userName" component={Repositorio} />
      </Switch>
    </Menu>
  );
};

export default AppRoutes;
