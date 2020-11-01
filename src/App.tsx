import React, { useState } from 'react';
// import axios, { AxiosResponse } from "axios";
import { Route, Switch } from 'react-router-dom';

import { Layout } from './layouts/Layout';
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
