import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Login  from './components/Login'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
