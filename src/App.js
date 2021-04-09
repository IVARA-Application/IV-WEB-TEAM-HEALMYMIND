import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "../src/components/Login";
import ThirdPartyLogin from "../src/components/ThirdPartyLogin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/thirdparty/linkedin">
            <ThirdPartyLogin type="linkedin" />
          </Route>
          <Route exact path="/thirdparty/google">
            <ThirdPartyLogin type="google" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
