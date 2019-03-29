import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <TodoItem
                todo={todo}
                ley={todo.id}
                toggleComplete={this.props.toggleComplete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todos;
