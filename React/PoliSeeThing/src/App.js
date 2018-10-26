import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    pageTitle: "Boxes Boxes Boxes",
    homework: ["Start HW 4",
    "Struggle with HW 4",
    "Complain about HW 4 to friends",
    "Never actually get Help",
    "cry",
    "Give up on Homework 4"],
    storage: [["Start HW 4", ""],
    ["Struggle with HW 4", ""],
    ["Complain about HW 4 to friends", ""],
    ["Never actually get Help", ""],
    ["cry", ""],
    ["Give up on Homework 4", ""]]
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
          <div key={x} style={{textAlign: 'center', padding: '50px',
            color: 'black', border: '5px inset RoyalBlue', margin: '5px',
            background: 'DodgerBlue', height: '100px'}}>
            <h3>{x}</h3>
          <button value={x} style={{margin: '10px',padding: '10px', textAlign:
            'center'}}
            onClick={this.handleChange}>Show/Hide</button>

          </div>
      ))}
      </div>
    );
  }
}

export default App;
