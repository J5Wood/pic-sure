import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import PostForm from './PostForm'
import SignupForm from './SignupForm'

export default class NavHeader extends Component {

    state = {
        showForm: false,
        showSignup: false
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

    render() {
        return (
            <div>
                <Navbar collapseOnSelect  bg="dark" variant="dark">
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <Button onClick={this.toggleSignupForm} variant="success">LOG-IN / SIGNUP</Button>
                    <Button onClick={this.togglePostForm}>New Post</Button>
                </Navbar>
                {this.renderPostForm()}
                {this.renderSignupForm()}
            </div>
        )
    }
}
