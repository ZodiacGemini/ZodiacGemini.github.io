import todoActionTypes from './todoActionTypes';

const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (text) => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: {
            id: uid(),
            isDone: false,
            text: text
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: todoActionTypes.TOGGLE_TODO,
        payload: id
    }
}

export const removeTodo = (id) => {
    return {
        type: todoActionTypes.REMOVE_TODO,
        payload: id
    }
}

export const removeDoneTodos = () => {
    return {
        type: todoActionTypes.REMOVE_DONE_TODOS,
    }
}