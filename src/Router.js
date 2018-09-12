import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';
import TodoCreate from './components/TodoCreate';
import TodoEdit from './components/TodoEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene>
                <Scene key="login" component={LoginForm} title="Please Login" />
                <Scene key="main" component={ToDoList} title="Your To do List" onRight={() => Actions.todoCreate()} rightTitle="Add Task" />
                <Scene key="todoCreate" component={TodoCreate} title="Create Task" />
                <Scene key="todoEdit" component={TodoEdit} title="Edit Task" />

            </Scene>

        </Router>
    );
};

export default RouterComponent;