import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { todoUpdate } from '../actions';

class ToDoForm extends Component {



    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Title"
                        placeHolder="i will do"
                        value={this.props.title}
                        onChangeText={value => this.props.todoUpdate({ prop: 'title', value })}

                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Content"
                        placeHolder="give more details what will you want to do"
                        value={this.props.content}
                        onChangeText={value => this.props.todoUpdate({ prop: 'content', value })}

                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {

    const { title, content } = state.todoForm;

    return { title, content };
};


export default connect(mapStateToProps, { todoUpdate })(ToDoForm);