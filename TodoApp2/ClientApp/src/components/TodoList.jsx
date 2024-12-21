import React, { Component } from "react";
import Todo from "./Todo";
import { Paper, List } from "@material-ui/core";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const listItems = this.props.todoList
      .filter((todo) => todo.isCompleted === this.props.isCompleted)
      .map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
          />
        );
      });
    return (
      <div className="todo-container col-lg-6 col-md-12 col-sm-12">
        <Paper elevation={3} className="mr-1 todo-list-container">
          <div className="pt-3">
            <h2 className="text-center">
              {this.props.isCompleted ? "Completed" : "Todo List"}
            </h2>
          </div>
          <List className="todo-list mt-3">{listItems}</List>
        </Paper>
      </div>
    );
  }
}

export default TodoList;
