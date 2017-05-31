import React from 'react';

const TodoText = ({todo}) => {
  if(todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export default TodoText;