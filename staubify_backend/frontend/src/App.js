import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/">
          <h1>Temp Splash Page</h1>
          <Link to="/login">Login</Link>
        </Route>
      </Switch>
    </>
  );
}

export default App;
