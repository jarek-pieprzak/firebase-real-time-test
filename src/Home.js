import React, { Component } from 'react';
import fire from './fire';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }


    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
               <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;