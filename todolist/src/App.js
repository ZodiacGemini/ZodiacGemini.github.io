import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import TodoListContainer from './modules/todoMain/containers/todoContainer';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    );
  }
}

export default App;