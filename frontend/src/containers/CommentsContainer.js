import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/CommentActions'
import { Comment } from '../components/Comment'
import CommentForm from './CommentForm'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    renderComments = () => {
        if (!!this.props.comments[0]) {
            return this.props.comments.map(comment => {
                return <Comment key={comment.id} comment={comment}/>
            })
        }
    }

    render() {
        return (
            <div>
                <br/>
                {this.renderComments()}

                <CommentForm user={this.props.currentUser} postId={this.props.postId}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        comments: state.commentReducer.comments,
        currentUser: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: postId => dispatch(fetchComments(postId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)