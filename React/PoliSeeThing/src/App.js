import React, { Component } from "react";
import './Style.css';
import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    pageTitle: "Boxes Boxes Boxes",
    homework: ["Start HW 6",
    "Struggle with HW 6",
    "Complain about HW 6 to friends",
    "Never actually get Help",
    "cry",
    "Give up on Homework 6"],
    storage: [["Start HW 6", ""],
    ["Struggle with HW 6", ""],
    ["Complain about HW 6 to friends", ""],
    ["Never actually get Help", ""],
    ["cry", ""],
    ["Give up on Homework 6", ""]]
  };

  addParameter = () => {
    this.setState({
      homework: []
    })
  };

  handleDelete = event => {
    var newHomework = [...this.state.homework];
    var index = newHomework.indexOf(event.target.value);
    newHomework.splice(index, 1);
    this.setState({homework: newHomework});
  };

  handleChange = event => {
    var newHomework = [...this.state.homework];
    var tempHomework = [...this.state.storage];
    var index = newHomework.indexOf(event.target.value);
    var temp = tempHomework[index][0]
    tempHomework[index][0] = tempHomework[index][1];
    tempHomework[index][1] = temp;
    newHomework[index] = tempHomework[index][0];
    this.setState({homework: newHomework});
    this.setState({storage: tempHomework});
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{this.state.pageTitle}</h1>
        {this.state.homework.map(x => (
          <div key={x} className="Boxes">
            <div className="InnerBox">
              <h3 className="Text">{x}</h3>
            </div>
          <button value={x} className="Button" onClick={this.handleChange}>Show/Hide</button>
          </div>
      ))}
      </div>
    );
  }
}

export default App;
