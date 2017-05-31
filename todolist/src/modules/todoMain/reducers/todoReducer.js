import todoActionTypes from '../actions/todo/todoActionTypes';

const initialState = [
  { id: 0, isDone: true,  text: 'Create a react-redux app' },
  { id: 1, isDone: true, text: 'Be polite'},
  { id: 2, isDone: true, text: 'Wait for Sofia to answer' },
  { id: 3, isDone: false, text: 'Go outside to get some air' },
  { id: 4, isDone: false, text: 'Realize its cold outside' },
  { id: 5, isDone: false, text: 'Regret choice of clothing' },
  { id: 6, isDone: false, text: 'Remember to call parents'}
];

const todos = (todos=initialState, action) => {
    switch(action.type){
        case todoActionTypes.ADD_TODO:
            return todos.concat(action.payload);
        case todoActionTypes.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                }
                else {
                    return todo;
                }
            })
        case todoActionTypes.REMOVE_TODO:
            var index = todos.findIndex(c => c.id === action.payload)
            return [...todos.slice(0, index),
                    ...todos.slice(index + 1)];
            
        case todoActionTypes.REMOVE_DONE_TODOS:
            return todos.filter(c => !c.isDone);
        default:
            return todos;
    }
}

export default todos;
