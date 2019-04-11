import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <Title></Title>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
