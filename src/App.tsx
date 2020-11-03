import React from 'react';
// import axios, { AxiosResponse } from "axios";
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/dashboard'} component={Dashboard} />
    </Switch>
  );
}

export default App;
