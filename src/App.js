import React, { Component } from "react";
import fire from "./fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    const messageRef = fire.database().ref("messages");

    messageRef.on("value", snapshot => {
      console.log("massages", snapshot.val())
      this.setState({
        messages: Object.entries(snapshot.val() || {}).map(
          ([key, value]) => ({
            id: key,
            caption: value
          })
        )
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

    console.log(this.state.messages)

    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={el => (this.inputEl = el)} />
        <input type="submit" />
        <ul>
          {this.state.messages.map(a => (
            <li key={a.id}>{a.caption}</li>
          ))}
        </ul>
      </form>
    );
  }
}

export default App;
