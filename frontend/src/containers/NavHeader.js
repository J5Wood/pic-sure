import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import PostForm from './PostForm'

export default class NavHeader extends Component {

    state = {
        showForm: false
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

    render() {
        return (
            <div>
                <Navbar collapseOnSelect  bg="dark" variant="dark">
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <Button onClick={this.togglePostForm}>New Post</Button>
                </Navbar>
                {this.renderPostForm()}
            </div>
        )
    }
}
