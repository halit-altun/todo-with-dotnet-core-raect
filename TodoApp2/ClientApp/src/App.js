import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Provider store={store}>
        <TodoApp />
    </Provider>
  );
}

export default App;
