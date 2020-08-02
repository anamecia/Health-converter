import React from "react";
import { Switch, Route } from "react-router-dom";
import "./sass/main.scss";

import Header from "./components/header";
import Navigation from "./components/navigation";
import CholesterolSection from "./sections/cholesterol";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="panel__main">
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/cholesterol" component={CholesterolSection} />
      </Switch>
    </div>
  );
}

export default App;
