import React, { Component } from "react";

class ToDoListItem extends React.Component {
  render() {
    return <h3>{this.props.todo}</h3>;
  }
}

export default ToDoListItem;