import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';

function App() {
  return (
    <>
      <h1>Temp Splash Page</h1>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
