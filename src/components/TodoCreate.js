import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ToDoForm from './ToDoForm';

class TodoCreate extends Component {
    onButtonPress() {
        const { title, content } = this.props;

        this.props.todoCreate({ title, content });
    }

    render() {
        return (
            <Card>
                <ToDoForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { title, content } = state.todoForm;
    return { title, content };
};

export default connect(mapStateToProps, { todoCreate })(TodoCreate);