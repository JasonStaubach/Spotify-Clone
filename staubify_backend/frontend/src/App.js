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
