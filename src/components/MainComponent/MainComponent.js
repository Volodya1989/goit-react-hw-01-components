import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";

import Statistics from "../Statistics/index.js";
import Profile from "../Profile/Profile.js";

function MainComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default MainComponent;