import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewPost } from '../actions/Posts'

class PostForm extends Component {

    state = {
        content: '',
        file: []
      }
    
    handleFile = e => {
        this.setState({
            ...this.state, file: e.target.files[0]
        })
    }

    handleContent = e => {
        this.setState({
            ...this.state, content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewPost(this.state.content)
    }
  

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleFile} type="file" name="image" accept="image/*" />
                <input type='text' value={this.state.content} onChange={this.handleContent}/>
                <input type='submit'></input>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewPost: post => dispatch(addNewPost(post))
    }
}

export default connect(null, mapDispatchToProps)(PostForm)
