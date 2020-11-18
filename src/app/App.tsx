import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { loggedInState } from './AppContext';

function App(): JSX.Element {
  const [loggedInStatus] = useState<loggedInState>({
    loggedInStatus: false,
  });

  return (
    <Switch>
      <Route exact path={'/'} render={() => <Home status={loggedInStatus} />} />
      <Route
        exact
        path={'/dashboard'}
        render={() => <Dashboard status={loggedInStatus} />}
      />
    </Switch>
  );
}

export default App;
