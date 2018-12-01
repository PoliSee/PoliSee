import React, { Component } from "react";
import ToDoListItem from "./components/toDoListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="container">
        <h1 class="jumbotron">
          {this.state.pageTitle}
        </h1>
        {this.state.homework.map(x => (
            <div class="card">
              <div class="card-body">
                {x}
                <button value={x} className="btn btn-default" onClick={this.handleChange}>Change</button>
              </div>
            </div>
      ))}
      </div>
    );
  }
}

export default App;
