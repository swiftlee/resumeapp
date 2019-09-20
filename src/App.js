import React, { Component } from 'react';
import Home from "./views/Home/Home";
import "./styles/Home.scss";

class App extends Component {
  render() {
    return (
      <div className={"background"}>
          <Home/>
      </div>
    );
  }
}

export default App;
