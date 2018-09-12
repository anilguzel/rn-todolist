import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TODO_CREATE, TODO_FETCH_SUCCESS, TODO_SAVE_SUCCESS,TODO_UPDATE } from './types';

export const todoUpdate = ({ prop, value }) => {
    return {
      type: TODO_UPDATE,
      payload: { prop, value }
    };
  };

export const todoCreate = ({ title, content }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/todolist`)
            .push({ title, content })
            .then(() => {
                dispatch({ type: TODO_CREATE });
                Actions.main({ type: 'reset' });
            });
    };
};

export const todoFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/todolist`)
            .on('value', snapshot => {
                dispatch({ type: TODO_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const todoSave = ({ title, content, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/todolist/${uid}`)
            .set({ title, content })
            .then(() => {
                dispatch({ type: TODO_SAVE_SUCCESS });
                Actions.main({ type: 'reset' });
            });
    };
};

export const todoDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
  
    return () => {
      firebase.database().ref(`/users/${currentUser.uid}/todolist/${uid}`)
        .remove()
        .then(() => {
          Actions.main({ type: 'reset' });
        });
    };
  };

  