import {
  ADD_TODO,
  FETCH_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actionTypes";

const initialTodoState = {
  todoList: [],
};

const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
      };
    }
    case FETCH_TODOS: {
      return {
        ...state,
        todoList: action.payload,
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
      };
    }
    case EDIT_TODO: {
      const id = action.payload.id;
      const newTodoList = state.todoList.map((todo) =>
        todo.id === id ? { ...todo, text: action.payload.text } : todo
      );
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
export default todos;
