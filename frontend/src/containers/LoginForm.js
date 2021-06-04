import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/UserActions';

class LoginForm extends Component {

    state ={
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name='username' value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: credentials => dispatch(login(credentials))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)