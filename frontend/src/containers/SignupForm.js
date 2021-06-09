import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/UserActions';

class SignupForm extends Component {

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
        this.props.signup(this.state)
        this.setState({
            username: '',
            password: ''
        })
        this.props.closeForm()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Signup!</h3>
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
        signup: credentials => dispatch(signup(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm)