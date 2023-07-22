import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import HeaderBar from './components/HeaderBar';
import SignupFormPage from './components/SignupFormPage'

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/">
          <HeaderBar/>
          {/* <h1>Temp Splash Page</h1>
          <Link to="/login">Login</Link> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
