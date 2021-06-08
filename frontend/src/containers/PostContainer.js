import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/PostActions'
import Post from './Post'
import CommentsContainer from './CommentsContainer'

class PostContainer extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.url.split("/")[2])
    }

    renderPost = () => {
        if (!!this.props.post.id && this.props.post.id === this.props.match.url.split("/")[2]) {
            return (
                <div>
                    <Post key={this.props.post.id} post={this.props.post}/>
                    <CommentsContainer postId={this.props.post.id} />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.postReducer.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)