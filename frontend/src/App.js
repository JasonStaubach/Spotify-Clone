import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import HeaderBar from './components/HeaderBar';
import SignupFormPage from './components/SignupFormPage';
import Homepage from "./components/Homepage";
import SearchShowPage from './components/SearchShowPage';

function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/artist">

        </Route> */}
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/search">
          <SearchShowPage/>
        </Route>
        <Route path="/">
          <Homepage/>
          {/* <h1>Temp Splash Page</h1>
          <Link to="/login">Login</Link> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
