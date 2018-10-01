import React, { Component } from "react";
// import Comunicator from "./components/Comunicator/views/Comunicator"
import Home from "./Home"
import Authorization from "./components/Authenticate/views/Authorization"
import fire from "./fire";

class App extends Component {
  constructor() {
    super();

    this.state = ({
      user: null,
    });
  }

  
  componentDidMount() {
    this.authListener()
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {

        this.setState({user: user})
        localStorage.setItem('user', user.uid);
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {

    console.log(this.state.user)

    return (
     <div>{this.state.user ? <Home/> : <Authorization />}</div>
    )
}
}

 export default App;