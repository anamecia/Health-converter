import React from "react";
import "./sass/main.scss";

import Header from "./components/header";
import Navigation from "./components/navigation";
import CholesterolSection from "./sections/cholesterol"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="panel__main">
        <Navigation />
      </div>
      <CholesterolSection />
    </div>
  );
}

export default App;
