import React, { Component } from "react";
import fire from "./fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    const messageRef = fire.database().ref();

    messageRef.on("value", snapshot => {
      this.setState({
        messages: snapshot.val().messages
      });
    });
  }

  addMessage(e) {
    e.preventDefault();
    
    fire
      .database()
      .ref("messages")
      .push(this.inputEl.value);
    this.inputEl.value = "";
  }

  render() {
    const root = fire.database().ref("messages");

    root.on("value", function(snap) {
      console.log(snap.val());
    });

    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={el => (this.inputEl = el)} />
        <input type="submit" />
        <ul>
          {Object.entries(this.state.messages).map(a => (
            <li key={a[0]}>{a[1]}</li>
          ))}
        </ul>
      </form>
    );
  }
}

export default App;
