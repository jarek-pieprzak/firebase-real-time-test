import React, { Component } from "react";
import SignIn from "./SignIn"
import SignUp from "./SignUp"

import './styles/Authorization.css'

class Authorization extends Component {

  render() {

    return (
     <div className="auth-container">
         <SignIn />
         {/* <SignUp /> */}
     </div>
    )
}
}

 export default Authorization;