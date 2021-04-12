import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "../src/components/Login";
import ThirdPartyLogin from "../src/components/ThirdPartyLogin";
import CreateAccount from "./components/CreateAccount";

import AnxietyAndPanicAttacks from "./components/blogs/AnxietyAndPanicAttacks";
import EssentialsToManage from "./components/blogs/EssentialsToManage";
import HealthyLifestyleOfAStudent from "./components/blogs/HealthyLifestyleOfAStudent";
import HowHappyMindCanCreateWonders from "./components/blogs/HowHappyMindCanCreateWonders";
import Multitasking from "./components/blogs/Multitasking";
import TacklingStress from "./components/blogs/TacklingStress";

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
          <Route exact path="/createaccount">
            <CreateAccount />
          </Route>
          <Route exact path="/Anxiety">
            <AnxietyAndPanicAttacks />
          </Route>
          <Route exact path="/Essentials">
            <EssentialsToManage />
          </Route>
          <Route exact path="/HealtyLifeStyle">
            <HealthyLifestyleOfAStudent />
          </Route>
          <Route exact path="/HowHappyMindCanCreateWonders">
            <HowHappyMindCanCreateWonders />
          </Route>
          <Route exact path="/Multitasking">
            <Multitasking />
          </Route>
          <Route exact path="/TacklingStress">
            <TacklingStress />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
