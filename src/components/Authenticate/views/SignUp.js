import React, { Component } from "react";
import fire from "../../../fire";

import "./styles/SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        this.setState({
          email: "",
          password: ""
        })
      )
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        this.setState({
          errorMessage: errorMessage
        });
        // console.log(errorCode, errorMessage)
      });
  };

  render() {
    console.log("email", this.state.email);
    console.log("password", this.state.password);

    return (
      <div id="signUp">
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
        <div onClick={() => this.emailSignIn()}>Create Account</div>
      </div>
    );
  }
}
export default SignUp;
