import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, inputUpdated } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    // onEmailChange(text) {
    //     this.props.emailChanged(text);
    // }
    // onPasswordChange(text) {
    //     this.props.passwordChanged(text);
    // }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (

            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorStyle}> {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        //onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        onChangeText={value => this.props.inputUpdated({ prop: 'email', value })}

                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        //onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        onChangeText={value => this.props.inputUpdated({ prop: 'password', value })}
                    //value => this.props.todoUpdate({ prop: 'title', value })}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, inputUpdated })(LoginForm);