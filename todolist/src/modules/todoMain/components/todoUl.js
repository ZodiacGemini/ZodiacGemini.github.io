import React from 'react';
import TodoText from './todoText';

const TodoUl = ({
    todos,
    toggleClick,
    removeClick
}) => {
    return(
    <ul className='todo__list' id='todolist'>
        {todos.map(t => (
          <li key={t.id}
          className='todo__item'
          onClick={() => toggleClick(t.id)}>
          <button className='listButton' onClick={() => removeClick(t.id)}>X</button>
            <TodoText todo={t} />
          </li>
        ))}
    </ul>
    )
}

export default TodoUl;
