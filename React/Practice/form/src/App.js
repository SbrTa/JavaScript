import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
