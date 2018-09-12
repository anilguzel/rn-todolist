import { TODO_SAVE_SUCCESS, TODO_CREATE, TODO_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  content: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TODO_CREATE:
      return INITIAL_STATE;
    case TODO_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};