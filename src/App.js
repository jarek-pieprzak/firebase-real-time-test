import React, { Component } from "react";
// import Comunicator from "./components/Comunicator/views/Comunicator"
import Home from "./Home"
import Login from "./components/Authenticate/views/Login"
import fire from "./fire";

class App extends Component {
  constructor() {
    super();

    this.state = ({
      user: null,
    });
  }

  componentDidMount() {}

  render() {

    return (
     <div>{this.state.user ? <Home/> : <Login />}</div>
    )
}
}

 export default App;