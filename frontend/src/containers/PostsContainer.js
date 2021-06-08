import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/PostActions'
import Post from './Post'
import { NavLink } from 'react-router-dom'

class PostsContainer extends Component {

    renderPosts = () => {
            return this.props.posts.map(post => {
                return (
                    <NavLink key={post.id} to={"/posts/" + post.id} exact>
                        <Post post={post}/>
                    </NavLink>
                )
            })
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer)
