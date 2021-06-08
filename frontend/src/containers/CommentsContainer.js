import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/CommentActions'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchComments: postId => dispatch(fetchComments(postId))
    }
}
export default connect(null,mapDispatchToProps)(CommentsContainer)