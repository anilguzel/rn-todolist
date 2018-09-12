import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, INPUT_UPDATE } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed.', loading: false };

        default:
            return state;
    }
}