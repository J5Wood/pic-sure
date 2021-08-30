import { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'


// Add back button

// Make back button actually use back for this page and post show page

class UserPage extends Component{

    renderPosts = () => {
        return this.props.posts.map(post => <Post key={post.id} post={post}/>)
    }

    render() {
        return (
            <div className="post-container">
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        posts: state.postReducer.posts.filter(post => post.attributes.user === ownProps.match.url.split("/")[2]).reverse()
    }
}

export default connect(mapStateToProps)(UserPage)