import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment } from '../actions/CommentActions'

class CommentForm extends Component {

    state = {
        content: ''
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const comment = {
            ...this.state,
            post_id: this.props.postId,
            user: this.props.user
        }
        this.props.addNewComment(comment)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br/>
                <b>{this.props.user}</b> - <input type="text" value={this.state.content} onChange={this.handleChange}/>
                <br/>
                <input type="submit" value="Comment"/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewComment: comment => dispatch(addNewComment(comment))
    }
}
export default connect(null, mapDispatchToProps)(CommentForm)