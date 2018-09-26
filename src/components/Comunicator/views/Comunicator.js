import React, { Component } from "react";
import fire from "../../../fire";

class Comunicator extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    const messageRef = fire.database().ref("messages");

    messageRef.on("value", snapshot => {
      console.log("massages", snapshot.val());
      this.setState({
        messages: Object.entries(snapshot.val() || {}).map(([key, value]) => ({
          id: key,
          caption: value
        }))
      });
    });
  }

  addMessage = e => {
    e.preventDefault();

    fire
      .database()
      .ref("messages")
      .push(this.inputEl.value);
    this.inputEl.value = "";
  };

  removeMessage = (key) => {
    fire
      .database()
      .ref("messages")
      .child(key)
      .remove();
  };

  render() {
    console.log(this.state.messages);

    return (
      <div>
        <form>
          <input type="text" ref={el => (this.inputEl = el)} />
          <input type="submit" onClick={this.addMessage} />
        </form>
        <table>
          <tbody>
            {this.state.messages.map(a => (
              <tr key={a.id}>
                <td key={a.id}>{a.caption}</td>
                <td>
                  <button onClick={() => this.removeMessage(a.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Comunicator;
