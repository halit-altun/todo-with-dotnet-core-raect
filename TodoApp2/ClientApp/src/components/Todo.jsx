import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";
import { TextField, IconButton, Card, Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { deleteTodo, updateTodo, editTodo } from "../redux/actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      todo: this.props.todo,
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.completeHandler = this.completeHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.editSubmitHandler = this.editSubmitHandler.bind(this);
    this.setEditMode = this.setEditMode.bind(this);
  }

  deleteHandler() {
    this.props.deleteTodo(this.props.todo.id);
  }
  completeHandler() {
    let tempTodo = this.props.todo;
    tempTodo.isCompleted = !tempTodo.isCompleted;
    this.props.updateTodo(tempTodo);
  }
  editHandler(e) {
    const todo = {
      ...this.props.todo,
      text: e.target.value,
    };
    this.props.editTodo(todo);
  }
  editSubmitHandler(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.todo);
    this.setState({
      editMode: false,
    });
  }
  setEditMode() {
    this.setState({
      editMode: true,
    });
  }
  render() {
    const editMode = this.state.editMode;
    return (
      <Card className="mt-1 mx-2">
        <div className="todo-item">
          <Checkbox
            onChange={this.completeHandler}
            className="mx-1"
            checked={this.props.todo.isCompleted}
          />
          {editMode ? (
            <form onSubmit={this.editSubmitHandler} className="flex-grow-1">
              <TextField
                id="todo-text"
                value={this.props.todo.text}
                onChange={this.editHandler}
                autoFocus
                required
              />
            </form>
          ) : (
            <Typography className="flex-grow-1">
              {this.props.todo.text}
            </Typography>
          )}
          <IconButton aria-label="delete" onClick={this.setEditMode}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={this.deleteHandler}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </div>
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => ({});

export default connect(null, { deleteTodo, updateTodo, editTodo })(Todo);
