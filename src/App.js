import React, { Component } from "react";
import "./App.css";
import Toggle from "./components/Toggle";
import Portal from "./components/Portal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {({ on, toggle }) => (
            <>
              {on && <h1>SHOW ME</h1>}
              <button onClick={toggle}>SHOW / HIDE</button>
              <Portal>{on && <h1>I'm in a portal</h1>}</Portal>
            </>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
