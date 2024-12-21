import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isCompleted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  handleSubmit(e) {
    this.props.addTodo(this.state);
    this.setState({
      text: "",
    });
    e.preventDefault();
  }
  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <FormControl fullWidth variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-amount">Enter Your Task</InputLabel>
          <OutlinedInput
            value={this.state.text}
            onChange={this.handleChange}
            labelWidth={120}
            required
          /> 
        </FormControl>
        <IconButton aria-label="" type="submit">
          <AddIcon/>
        </IconButton>
      </form>
        
    );
  }
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = () => ({
})

export default connect(
  null,
 {addTodo}
 )(TodoForm);
