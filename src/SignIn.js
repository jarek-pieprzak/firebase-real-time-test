import React, { Component } from "react";
import fire from "./fire";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  emailSignIn = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.setState({
          email: '',
          password: ''
      }))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({
            email: '',
            password: ''
        })
        // console.log(errorCode, errorMessage)
      })
  };

  render() {
    console.log("email", this.state.email);
    console.log("password", this.state.password);

    return (
      <div>
        <form>
          <label>
            E-mail:
            <input
              type="text"
              value={this.state.value}
              onChange={this.onEmailChange}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </label>
        </form>
        <button onClick={() => this.emailSignIn()}>Create Account</button>
      </div>
    );
  }
}
export default SignIn;
