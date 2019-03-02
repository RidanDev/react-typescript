import * as React from "react";
import "./App.css";
//import HelloSFC from "./components/HelloSFC";
//import HelloStateful from "./components/HelloStateful";
import HelloHooks from "./components/HelloHooks";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <HelloSFC name="Typescript" enthusiasmLevel={10} /> */}
        {/* <HelloStateful name="Typescript" enthusiasmLevel={10} /> */}
        <HelloHooks name="Typescript" />
      </div>
    );
  }
}

export default App;
