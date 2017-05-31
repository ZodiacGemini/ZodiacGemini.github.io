import todos from './modules/todoMain/reducers/todoReducer';
import visibility from './modules/todoMain/reducers/visibilityReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todos,
  visibility
});

export default rootReducer;
