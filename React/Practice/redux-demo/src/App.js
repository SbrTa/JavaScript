import React, { Component } from "react";
import "./App.css";
import { createStore } from "redux";

class App extends Component {
  render() {
    const reducer = (state = {}, action) => {
      if (action.type === "A") {
        return { A: "I am A" };
      }
      return state;
    };
    const store = createStore(reducer);

    store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch({ type: "something" });

    store.dispatch({ type: "A" });
    store.dispatch({ type: "something" });

    return (
      <div className="App">
        <h1>REDUX DEMO</h1>
      </div>
    );
  }
}

export default App;
