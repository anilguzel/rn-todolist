import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import TodoReducers from './TodoReducers';
import TodoFormReducers from './TodoFormReducers';


export default combineReducers({
    auth: AuthReducers,
    todolist: TodoReducers,
    todoForm: TodoFormReducers
});