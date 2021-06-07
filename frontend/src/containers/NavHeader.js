import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import PostForm from './PostForm'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux'
import { logout } from '../actions/UserActions'

class NavHeader extends Component {

    state = {
        showForm: false,
        showSignup: false,
        showLogin: false
    }
    
    togglePostForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    renderPostForm = () => {
        if (this.state.showForm) {
            return <PostForm />
        }
    }

    toggleSignupForm = () => {
        this.setState({
            showSignup: !this.state.showSignup
        })
    }

    renderSignupForm = () => {
        if (this.state.showSignup) {
            return <SignupForm />
        }
    }

    toggleLoginForm = () => {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    renderLoginForm = () => {
        if (this.state.showLogin) {
            return <LoginForm />
        }
    }

    logout = () => {
        this.props.logout(this.props.user)

    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect  bg="dark" variant="dark">
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <Button onClick={this.toggleLoginForm} variant="success">LOG-IN</Button>
                    <Button onClick={this.toggleSignupForm} variant="success">SIGNUP</Button>
                    <Button onClick={this.togglePostForm}>New Post</Button>
                    <h3><Badge variant="info" >{this.props.user}</Badge></h3>
                    <Button onClick={this.logout} variant="danger">LOGOUT</Button>
                </Navbar>
                {this.renderPostForm()}
                {this.renderLoginForm()}
                {this.renderSignupForm()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: user => dispatch(logout(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)