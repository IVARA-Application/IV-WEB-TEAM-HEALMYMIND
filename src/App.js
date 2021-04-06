import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import AnxietyPage from "./components/AnxietyPage";
import Blogs from "./components/Blogs";
import CareerCounselling from "./components/CareerCounselling";
import ContactUs from "./components/ContactUs";
import HealMyMind from "./components/HealMyMind";
import IndividualCounselling from "./components/IndividualCounselling";
import MainPage from "./components/MainPage";
import TherapeauticAudios from "./components/TherapeauticAudios";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <HomePage />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
