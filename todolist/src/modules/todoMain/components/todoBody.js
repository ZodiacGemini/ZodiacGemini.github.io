import React from 'react';
import ToggleButtons from './toggleButtons';
import TodoUl from './todoUl';
import filters from '../constants';

const TodoBody = (
  {
    todos,
    filter,
    toggleTodo,
    addTodo, 
    removeTodo,
    removeDoneTodos,
    changeFilter
  }) => {
  const onSubmit = (event) => {
    let text = event.target.value;
    let isEnterKey = (event.which === 13);
    let isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough){
      event.target.value = '';
      addTodo(text);
      document.body.scrollTop = document.getElementById('todolist').offsetHeight;
    }
  }

  const filterTodos = (filter, todos) => {
    switch(filter){
      case filters.SHOW_ALL:
        return todos;
      case filters.SHOW_ACTIVE:
        return todos.filter(t => !t.isDone);
      case filters.SHOW_DONE:
        return todos.filter(t => t.isDone);
      default:
        return todos;
    }
  }

  return (
    <div className='todo'>
      <input 
      type='text'
      className='todo__entry'
      placeholder='Add todo'
      onKeyDown={onSubmit}
      />
      <TodoUl 
      todos={filterTodos(filter, todos)}
      removeClick={(id) => removeTodo(id)}
      toggleClick={(id) => toggleTodo(id)}
      />
      <ToggleButtons 
        onRemoveClick={() => removeDoneTodos()}
        onFilterClick={(filter) => changeFilter(filter)}
        currentFilter={filter}
      />
    </div>
  );
}

export default TodoBody;