import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import Login from "../src/components/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
