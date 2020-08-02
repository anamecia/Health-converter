import React from "react";
import "./sass/main.scss";

import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="panel__main">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
