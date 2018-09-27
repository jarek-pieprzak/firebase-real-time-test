import React, { Component } from "react";
import fire from "./fire";

import SignIn from "./SignIn"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
       Login
       <SignIn />
      </div>
    );
  }
}
export default Login;
