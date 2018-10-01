import React, { Component } from "react";
import fire from "../../../fire";

import "./styles/SignIn.css"

import SignUp from "./SignUp"

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      errorCode: ""
    };
  }

  onEmailChange = e => {
    this.setState({
      email: e.target.value,
      errorMessage: ""
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value,
      errorMessage: ""
    });
  };

  emailSignIn = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      // .then(
      //   this.setState({
      //     email: "",
      //     password: ""
      //   })
      // )
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        this.setState({
          errorMessage: errorMessage,
          errorCode: errorCode,
          email: "",
          password: ""
        });
      });
  };

  render() {
    // console.log("email", this.state.email);
    // console.log("password", this.state.password);

    return (
      <div id="signIn">
        <input
          type="text"
          placeholder="E-Mail"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <div className="errorMessage">{this.state.errorMessage}</div>
        <div onClick={() => this.emailSignIn()}>Log In</div>
      </div>
    );
  }
}
export default SignIn;
