import {toggleTodo, addTodo, removeTodo, removeDoneTodos} from '../actions/todo/todoActions';
import { connect } from 'react-redux';
import todoBody from '../components/todoBody';
import showDone from '../actions/filter/filterActions';

const TodoListContainer = connect(
  function mapStateToProps(state) {
    console.log(state);
    return {
      todos: state.todos, 
      filter: state.visibility
    }
  },
  function mapDispatchToProps(dispatch){
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      removeTodo: id => dispatch(removeTodo(id)),
      removeDoneTodos: () => dispatch(removeDoneTodos()),
      changeFilter: filter => dispatch(showDone(filter))
    }
  })(todoBody);
  
export default TodoListContainer;