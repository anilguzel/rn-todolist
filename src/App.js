import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';



class App extends Component {
// this area needs to get settings from console.firebase
    componentWillMount() {
        var config = {
            apiKey: "xx",
            authDomain: "xx",
            databaseURL: "xx",
            projectId: "xx",
            storageBucket: "xx",
            messagingSenderId: "xx"
        };
        firebase.initializeApp(config);
    };

    
    render() {
        const enhancers = compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        );
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk), enhancers);
        return (
            <Provider store={store}>
                <Router />
            </Provider >
        );
    }
}

export default App;
