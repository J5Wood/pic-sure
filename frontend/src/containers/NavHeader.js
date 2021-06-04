import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import PostForm from './PostForm'
import LoginForm from './LoginForm'

export default class NavHeader extends Component {

    state = {
        showForm: false,
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

    toggleLoginForm = () => {
        this.setState({
            loginForm: !this.state.loginForm
        })
    }

    renderLoginForm = () => {
        if (this.state.loginForm) {
            return <LoginForm />
        }
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect  bg="dark" variant="dark">
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <Button onClick={this.toggleLoginForm} variant="success">LOG-IN / SIGNUP</Button>
                    <Button onClick={this.togglePostForm}>New Post</Button>
                </Navbar>
                {this.renderPostForm()}
                {this.renderLoginForm()}
            </div>
        )
    }
}
