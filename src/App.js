import React, { Component } from "react";
import "./App.css";
import CoinContainer from "./CoinContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <CoinContainer />
      </div>
    );
  }
}

export default App;
