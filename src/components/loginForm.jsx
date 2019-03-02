import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import { login } from '../services/authService';

export class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;

      // rename data object to jwt
      const { data: jwt } = await login(data.username, data.password);
      console.log('jwt', jwt);

      localStorage.setItem('token', jwt);
      // route back to home page after login
      this.props.history.push('/');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}

          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
