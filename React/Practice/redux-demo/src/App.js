import React, { Component } from "react";
import "./App.css";

import Count from "./Components/Count";
import Control from "./Components/Control";


class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>REDUX DEMO</h1>
          <Count />
          <Control />
        </div>
    );
  }
}

export default App;
