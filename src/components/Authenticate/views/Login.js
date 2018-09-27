import React, { Component } from "react";
import fire from "../../../fire";

import SignUp from "./SignUp"

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       {/* Login */}
       <SignUp />
      </div>
    );
  }
}
export default Login;
