import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/fetchPosts'
import Post from './Post'

class PostContainer extends Component {

    renderPosts = () => {
            return this.props.posts.map(post => <Post post={post}/>)
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                Post Container
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostContainer)
