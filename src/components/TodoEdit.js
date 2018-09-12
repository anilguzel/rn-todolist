import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import ToDoForm from './ToDoForm';
import { todoForm, todoSave, todoDelete, todoUpdate } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class TodoEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.todo, (value, prop) => {
      this.props.todoUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, content } = this.props;

    this.props.todoSave({ title, content, uid: this.props.todo.uid });
  }


  onAccept() {
    const { uid } = this.props.todo;

    this.props.todoDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <ToDoForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Task
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, content } = state.todoForm;

  return { title, content };
};

export default connect(mapStateToProps, {
  todoUpdate, todoSave, todoDelete
})(TodoEdit);