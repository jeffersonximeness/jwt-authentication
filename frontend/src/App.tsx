import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Login  from './components/Login'
import Register from './components/Register'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
