import React, { Component } from "react";
import {HubConnectionBuilder} from '@microsoft/signalr'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import {fetchTodos} from '../redux/actions';
import { connect } from "react-redux";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hubConnection: new HubConnectionBuilder()
                .withUrl("https://localhost:5001/todohub")
                .build()
    };
    this.completeTodo = this.completeTodo.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);


  }
  componentDidMount(){
    this.state.hubConnection
    .start()
    .then(() => console.log('Hub connection started!'))
    .catch(err => console.log('Error while establishing connection', err));

    this.state.hubConnection.on('GetData', () => {
      this.fetchTasks();
    });

    this.fetchTasks();
  }
  componentWillUnmount(){
    this.state.hubConnection.stop()
    .then(() => console.log('Hub connection stoped!'))
  } 

  fetchTasks() {
    console.log("Fetching Data...")
    this.props.fetchTodos()

  }
  completeTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.editTodo(todo);
  }

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1>Todo App</h1>
        </header>
        <div className="row justify-content-center my-5">
          <TodoForm />
        </div>
        <div className="row justify-content-around my-5">
          <TodoList
            isCompleted={false}
            todoList={this.props.todoList}
          />
          <TodoList
            isCompleted={true}
            todoList={this.props.todoList}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {todoList: state.todos.todoList}
}
export default connect(
  mapStateToProps,
  {fetchTodos}
)(TodoApp);
