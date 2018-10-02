import React, { Component } from "react";
import fire from "../../../fire";

// import "./styles/SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      errorCode: "",
      user: null
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

  emailSignUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(a =>
        fire
          .database()
          .ref("users/" + a.user.uid)
          .set({
            // username: name,
            email: this.state.email
            // profile_picture: imageUrl
          })
      )
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        
          this.setState({errorMessage: errorMessage})
          
        console.log(error);
    });
  };

  render() {
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
        <div onClick={() => this.emailSignUp()}>Create Account</div>
      </div>
    );
  }
}
export default SignUp;
