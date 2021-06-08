import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewPost } from '../actions/PostActions'

class PostForm extends Component {

    state = {
        content: '',
        photo: null
      }
    
    handleFile = e => {
        this.setState({
            ...this.state, photo: e.target.files[0]
        })
    }

    handleContent = e => {
        this.setState({
            ...this.state, content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewPost(this.state, this.props.user)
        this.setState({
            content: '',
            photo: null
        })
    }
  

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleFile} type="file" name="photo" accept="image/*" />
                <input type='text' value={this.state.content} onChange={this.handleContent}/>
                <input type='submit'></input>
            </form>
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
        addNewPost: (post, user) => dispatch(addNewPost(post, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
