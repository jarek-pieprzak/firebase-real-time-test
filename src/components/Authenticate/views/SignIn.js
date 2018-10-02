import React, { Component } from "react";
import fire from "../../../fire";

import "./styles/SignIn.css";

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
        var errorMessage = error.message;

        this.setState({
          errorMessage: errorMessage,
          email: "",
          password: ""
        });
      });
  };

  render() {
    // console.log("email", this.state.email);
    // console.log("password", this.state.password);

    return (
      <div className="Auth-Screen">
        <div className="SignInWrapper">
          <div className="container">
            <h1>Hello!</h1>

            <div className="form">
              <input
                type="text"
                placeholder="Username"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
              <button
                type="submit"
                id="login-button"
                onClick={() => this.emailSignIn()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <ul className="bg-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}
export default SignIn;

{
  /* <div id="signInContainer">
        <div className="forms-container">
          <div className="form-input">
            <input
              type="text"
              placeholder="E-Mail"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
        </div>

        <div className="errorMessage">{this.state.errorMessage}</div>
        <div onClick={() => this.emailSignIn()}>Log In</div>
      </div> */
}
