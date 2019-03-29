import React, { Component } from "react";

class TodoItem extends Component {
  todoStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    let { title, id } = this.props.todo;
    return (
      <li style={this.todoStyle()}>
        <span>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />
        </span>
        <span>{title}</span>;
      </li>
    );
  }
}

export default TodoItem;
